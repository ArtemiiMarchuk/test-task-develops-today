import {
    CREATE_POST_CONTENT,
    CREATE_POST_DISABLE_BUTTON,
    CREATE_POST_SUCCESS,
    CREATE_POST_TITLE,
} from '../../store/actions/actionTypes';

interface createPostTitleAction {
    type: typeof CREATE_POST_TITLE;
    payload: string;
}

interface createPostContentAction {
    type: typeof CREATE_POST_CONTENT;
    payload: string;
}

interface createPostSuccessAction {
    type: typeof CREATE_POST_SUCCESS;
}

interface createPostDisableButton {
    type: typeof CREATE_POST_DISABLE_BUTTON;
}

export type createActionType =
    | createPostContentAction
    | createPostTitleAction
    | createPostSuccessAction
    | createPostDisableButton;
