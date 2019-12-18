import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors_reducer';
import UIReducer from './ui_reducer.js';

const RootReducer = combineReducers({
    session: SessionReducer,
    entities: EntitiesReducer,
    errors: ErrorsReducer,
    ui: UIReducer
})

export default RootReducer;