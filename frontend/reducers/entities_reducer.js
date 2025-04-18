import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import TracksReducer from './tracks_reducer';
import CommentsReducer from './comments_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  tracks: TracksReducer,
  comments: CommentsReducer,
});

export default EntitiesReducer;
