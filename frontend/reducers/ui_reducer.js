import { combineReducers } from "redux";
import ModalReducer from "./modal_reducer";
import MusicPlayerReducer from "./music_player_reducer";

const UIReducer = combineReducers({
  modal: ModalReducer,
  musicPlayer: MusicPlayerReducer,
});

export default UIReducer;
