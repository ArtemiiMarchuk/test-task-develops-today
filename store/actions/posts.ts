import axios from '../../axios/axios';
import { FETCH_POST_ITEM_SUCCESS, FETCH_POSTS_SUCCESS } from './actionTypes';
import { postsActionType } from '../../interfaces/store/postTypes';
import { IPost } from '../../interfaces/Post';
import { Dispatch } from 'redux';

export const fetchPostItem = (postId: number) => {
    return async (dispatch: Dispatch<postsActionType>): Promise<void> => {
        try {
            const response = await axios.get(`/${postId}`);
            console.log(response.data);
            dispatch(fetchPostItemSuccess(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const fetchPostItemSuccess = (response: IPost): postsActionType => {
    return {
        type: FETCH_POST_ITEM_SUCCESS,
        payload: { title: response.title, body: response.body, id: response.id },
    };
};

export const fetchPosts = () => {
    return async (dispatch: Dispatch<postsActionType>): Promise<void> => {
        try {
            const response = await axios.get('');

            dispatch(fetchPostsSuccess(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const fetchPostsSuccess = (response: IPost[]): postsActionType => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: response,
    };
};
