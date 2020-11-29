import { combineReducers } from 'redux';
import postsReducer from './posts';
import createReducer from './create';

export default combineReducers({
    posts: postsReducer,
    create: createReducer,
});
