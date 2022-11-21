/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from "@reduxjs/toolkit";
import httpService from "../../services/httpService"
import { toggleLoading } from "./spellSlice";

// Middleware related configuration for redux thunk
export const getSpells = createAsyncThunk<any, any>(
  "spells/getSpells",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(toggleLoading());
    try {
      const data = await httpService.get("/spells");
      return data.data?.results;
    } catch (error) {
      return rejectWithValue(error);
    } finally {
      dispatch(toggleLoading());
    }
  }
);
