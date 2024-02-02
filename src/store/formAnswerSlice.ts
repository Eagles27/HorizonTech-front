import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import httpClient from "../services/http";
import { TError, TApiError } from "../types/error";
import {
  TFormAnswers,
  TFormPostBody,
  TFormResponse,
} from "../types/formAnswer";
import { toast } from "react-toastify";

export interface IFormAnswerState {
  formAnswer: TFormAnswers;
  loading: boolean;
  error: boolean;
}

const initialState: IFormAnswerState = {
  formAnswer: {
    _id: "",
    user_id: "",
    responses: [],
  },
  loading: false,
  error: false,
};

export const postFormAnswer = createAsyncThunk<
  TFormResponse,
  { formAnswer: TFormPostBody; headerValue: string | undefined },
  { rejectValue: TError<TApiError> }
>(
  "formAnswer/postFormAnswer",
  async ({ formAnswer, headerValue }, { rejectWithValue }) => {
    try {
      const response = await httpClient.post<TFormResponse>(
        "/form/submit",
        formAnswer,
        {
          headers: {
            Authorization: `Bearer ${headerValue}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      const err = error as AxiosError<TApiError>;
      return rejectWithValue({
        data: err.response?.data,
        status: err.response?.status,
      });
    }
  },
);

export const getFormAnswerById = createAsyncThunk<
  TFormAnswers,
  { id: string; headerValue: string | undefined },
  { rejectValue: TError<TApiError> }
>(
  "formAnswer/getFormAnswerById",
  async ({ id, headerValue }, { rejectWithValue }) => {
    try {
      const response = await httpClient.get<TFormAnswers>(
        `user/form_answers/${id}`,
        {
          headers: {
            Authorization: `Bearer ${headerValue}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      const err = error as AxiosError<TApiError>;
      return rejectWithValue({
        data: err.response?.data,
        status: err.response?.status,
      });
    }
  },
);

export const formAnswerSlice = createSlice({
  name: "formAnswer",
  initialState,
  reducers: {
    resetFormAnswer: (state) => {
      state.formAnswer = {
        _id: "",
        user_id: "",
        responses: [],
      };
      state.loading = false;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postFormAnswer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postFormAnswer.fulfilled, (state, action) => {
      state.loading = false;
      state.formAnswer._id = action.payload._id;
    });
    builder.addCase(postFormAnswer.rejected, (state) => {
      state.loading = false;
      state.error = true;
      toast.error("Une erreur est survenue veuillez réessayer plus tard...");
    });
    builder.addCase(getFormAnswerById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getFormAnswerById.fulfilled, (state, action) => {
      state.loading = false;
      state.formAnswer = action.payload;
    });
    builder.addCase(getFormAnswerById.rejected, (state) => {
      state.loading = false;
      state.error = true;
      toast.error("Une erreur est survenue veuillez réessayer plus tard...");
    });
  },
});

export const { resetFormAnswer } = formAnswerSlice.actions;

export default formAnswerSlice.reducer;
