import { combineReducers } from "redux";
import spellReducer from "./spell/spellSlice";
import favouriteReducer from "./favourite/favouriteSlice";

const reducer = combineReducers({
  Spell: spellReducer,
  Favourites: favouriteReducer
});

export default reducer;
