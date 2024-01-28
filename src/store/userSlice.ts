import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TApiError, TError } from "../types/error";
import {
  TUser,
  TUserContacts,
  TUserLoginResponse,
  TUserPostBody,
  TUserPostBodyLogin,
  TUserPostMatchBody,
  TUsers,
} from "../types/user";
import httpClient from "../services/http";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export interface IUserState {
  user: TUser | null;
  marraineAvailable: TUsers | null;
  token: string;
  isAuth: boolean;
  loading: boolean;
  error: boolean;
}

const initialState: IUserState = {
  user: null,
  marraineAvailable: null,
  token: "",
  isAuth: false,
  loading: false,
  error: false,
};

export const signUpUser = createAsyncThunk<
  TUserLoginResponse,
  TUserPostBody,
  { rejectValue: TError<TApiError> }
>("user/signUpUser", async (body, { rejectWithValue }) => {
  try {
    const response = await httpClient.post<TUserLoginResponse>(
      "/user/signup",
      body,
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError<TApiError>;
    return rejectWithValue({
      data: err.response?.data,
      status: err.response?.status,
    });
  }
});

export const loginUser = createAsyncThunk<
  TUserLoginResponse,
  TUserPostBodyLogin,
  { rejectValue: TError<TApiError> }
>("user/loginUser", async (body, { rejectWithValue }) => {
  try {
    const response = await httpClient.post<TUserLoginResponse>(
      "/user/login",
      body,
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError<TApiError>;
    return rejectWithValue({
      data: err.response?.data,
      status: err.response?.status,
    });
  }
});

export const getUserInfo = createAsyncThunk<
  TUser,
  string,
  { rejectValue: TError<TApiError> }
>("user/getUserInfo", async (authorization, { rejectWithValue }) => {
  try {
    const response = await httpClient.get<TUser>("/user/info", {
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    });
    return response.data;
  } catch (error) {
    const err = error as AxiosError<TApiError>;
    return rejectWithValue({
      data: err.response?.data,
      status: err.response?.status,
    });
  }
});

export const getMarraineAvailable = createAsyncThunk<
  TUsers,
  string,
  { rejectValue: TError<TApiError> }
>("user/getMarraineAvailable", async (authorization, { rejectWithValue }) => {
  try {
    const response = await httpClient.get<TUsers>("/user/info_marraine", {
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    });
    return response.data;
  } catch (error) {
    const err = error as AxiosError<TApiError>;
    return rejectWithValue({
      data: err.response?.data,
      status: err.response?.status,
    });
  }
});

export const matchMarraine = createAsyncThunk<
  TUserContacts,
  { body: TUserPostMatchBody; headerValue: string | undefined },
  { rejectValue: TError<TApiError> }
>("user/matchMarraine", async ({ body, headerValue }, { rejectWithValue }) => {
  try {
    const response = await httpClient.post<TUserContacts>("/user/match", body, {
      headers: {
        Authorization: `Bearer ${headerValue}`,
      },
    });
    return response.data;
  } catch (error) {
    const err = error as AxiosError<TApiError>;
    return rejectWithValue({
      data: err.response?.data,
      status: err.response?.status,
    });
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    disconnectUser: (state) => {
      state.user = null;
      state.token = "";
      state.isAuth = false;
      toast.success("Vous êtes bien déconnecté(e)");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.isAuth = true;
      state.error = false;
    });
    builder.addCase(signUpUser.rejected, (state) => {
      state.loading = false;
      state.error = true;
      toast.error("Une erreur est survenue veuillez réessayer plus tard...");
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.isAuth = true;
      state.error = false;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.loading = false;
      state.error = true;
      toast.error("Mauvais identifiants...");
    });
    builder.addCase(getUserInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = false;
    });
    builder.addCase(getUserInfo.rejected, (state) => {
      state.loading = false;
      state.error = true;
      toast.error(
        "Impossible de récupérer les informations de l'utilisateur une erreur est survenue veuillez réessayer plus tard...",
      );
    });
    builder.addCase(getMarraineAvailable.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMarraineAvailable.fulfilled, (state, action) => {
      state.loading = false;
      state.marraineAvailable = action.payload;
      state.error = false;
    });
    builder.addCase(getMarraineAvailable.rejected, (state) => {
      state.loading = false;
      state.error = true;
      toast.error(
        "Impossible de récupérer les marraines disponibles une erreur est survenue veuillez réessayer plus tard...",
      );
    });
    builder.addCase(matchMarraine.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(matchMarraine.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      if (state.user) {
        state.user.contacts = [
          ...(state.user.contacts || []),
          ...action.payload,
        ];
      }
      toast.success(
        "Dès que la marraine aura accepté votre demande, vous serez mis en contact !",
      );
    });
    builder.addCase(matchMarraine.rejected, (state) => {
      state.loading = false;
      state.error = true;
      toast.error("Une erreur est survenue veuillez réessayer plus tard...");
    });
  },
});

export const { disconnectUser } = userSlice.actions;

export default userSlice.reducer;
