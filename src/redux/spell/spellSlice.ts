import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { getSpells } from "./middleware"
import { SpellState } from "./types"

const INITIAL_STATE: SpellState = {
    spellList: [],
    loading: false,
}

const spellSlice = createSlice({
  name: "Spell",
  initialState: INITIAL_STATE,
  reducers: {
    toggleLoading: (state)=>{
      state.loading = !state.loading
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getSpells.fulfilled, (state, { payload }) => ({
      ...state,
      spellList: payload,
      loading: false,
      message: "",
    }))
    builder.addCase(getSpells.rejected, (state, { payload }) => ({
      ...state,
      spellList: [],
      loading: false,
      message: "",
    }))
  },
})

export const { toggleLoading } = spellSlice.actions

export const spellSelector = (state: RootState) => state.Spell

export default spellSlice.reducer
