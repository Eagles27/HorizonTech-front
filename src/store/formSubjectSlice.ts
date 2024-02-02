import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TError, TApiError } from "../types/error";
import { TForm } from "../types/form";
import httpClient from "../services/http";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export interface IFormSubjectState {
  subject: TForm;
  loading: boolean;
  error: boolean;
}

const initialState: IFormSubjectState = {
  subject: [],
  loading: false,
  error: false,
};

export const getFormSubject = createAsyncThunk<
  TForm,
  void,
  { rejectValue: TError<TApiError> }
>("formSubject/getFormSubject", async (_, { rejectWithValue }) => {
  try {
    const response = await httpClient.get<TForm>("/form/subject");
    return response.data;
  } catch (error) {
    const err = error as AxiosError<TApiError>;
    return rejectWithValue({
      data: err.response?.data,
      status: err.response?.status,
    });
  }
});

export const formSubjectSlice = createSlice({
  name: "formSubject",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFormSubject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getFormSubject.fulfilled, (state, action) => {
      state.loading = false;
      state.subject = action.payload;
    });
    builder.addCase(getFormSubject.rejected, (state) => {
      state.loading = false;
      state.error = true;
      toast.error(
        "Impossible de récupérer les informations du formulaire veuillez réessayer plus tard...",
      );
    });
  },
});

export default formSubjectSlice.reducer;
