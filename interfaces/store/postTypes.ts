import { FETCH_POST_ITEM_SUCCESS, FETCH_POSTS_SUCCESS } from '../../store/actions/actionTypes';
import { IPost } from '../Post';

interface fetchPostsSuccessAction {
    type: typeof FETCH_POSTS_SUCCESS;
    payload: IPost[];
}

interface fetchPostItem {
    type: typeof FETCH_POST_ITEM_SUCCESS;
    payload: IPost;
}

export type postsActionType = fetchPostsSuccessAction | fetchPostItem;
