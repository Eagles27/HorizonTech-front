// TODO: Revoir l'interface et les types

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import httpClient from "../services/http";
import { TError, TApiError } from "../types/error";
import { TFormPostBody, TFormResponse } from "../types/formAnswer";
import { toast } from "react-toastify";

export interface IFormAnswerState {
  formAnswerId: TFormResponse;
  loading: boolean;
  error: boolean;
}

const initialState: IFormAnswerState = {
  formAnswerId: { _id: "" },
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

export const formAnswerSlice = createSlice({
  name: "formAnswer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postFormAnswer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postFormAnswer.fulfilled, (state, action) => {
      state.loading = false;
      state.formAnswerId = action.payload;
    });
    builder.addCase(postFormAnswer.rejected, (state) => {
      state.loading = false;
      state.error = true;
      toast.error("Une erreur est survenue veuillez réessayer plus tard...");
    });
  },
});

export default formAnswerSlice.reducer;
