import { FETCH_POST_ITEM_SUCCESS, FETCH_POSTS_SUCCESS } from '../actions/actionTypes';
import { postsActionType } from '../../interfaces/store/postTypes';
import { statePostsInterface } from '../../interfaces/store/statesInterfaces';

const initialState: statePostsInterface = {
    posts: [],
};

export default function postsReducer(
    state: statePostsInterface = initialState,
    action: postsActionType,
): statePostsInterface {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return { ...state, posts: action.payload };
        case FETCH_POST_ITEM_SUCCESS:
            return { ...state, activePost: action.payload };
        default:
            return state;
    }
}
