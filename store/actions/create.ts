import { createActionType } from '../../interfaces/store/createTypes';
import { CREATE_POST_CONTENT, CREATE_POST_DISABLE_BUTTON, CREATE_POST_SUCCESS, CREATE_POST_TITLE } from './actionTypes';
import { Dispatch } from 'redux';
import axios from '../../axios/axios';
import { stateInterface } from '../../interfaces/store/statesInterfaces';

export const createPost = () => {
    return async (dispatch: Dispatch<createActionType>, getState: () => stateInterface): Promise<void> => {
        dispatch(createPostDisableButton());

        try {
            await axios.post('', {
                title: getState().create.title,
                body: getState().create.content,
            });

            dispatch(createPostSucess());
        } catch (e) {
            console.log(e);
        }
    };
};

export const createPostDisableButton = (): createActionType => {
    return {
        type: CREATE_POST_DISABLE_BUTTON,
    };
};

export const createPostSucess = (): createActionType => {
    return {
        type: CREATE_POST_SUCCESS,
    };
};

export const createTitle = (value: string): createActionType => {
    return {
        type: CREATE_POST_TITLE,
        payload: value,
    };
};

export const createContent = (value: string): createActionType => {
    return {
        type: CREATE_POST_CONTENT,
        payload: value,
    };
};
