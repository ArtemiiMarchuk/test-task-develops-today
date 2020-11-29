import { createActionType } from '../../interfaces/store/createTypes';
import {
    CREATE_POST_CONTENT,
    CREATE_POST_DISABLE_BUTTON,
    CREATE_POST_SUCCESS,
    CREATE_POST_TITLE,
} from '../actions/actionTypes';
import { stateCreateInterface } from '../../interfaces/store/statesInterfaces';

const initialState: stateCreateInterface = {
    title: '',
    content: '',
    allowCreate: true,
};

export default function createReducer(
    state: stateCreateInterface = initialState,
    action: createActionType,
): stateCreateInterface {
    switch (action.type) {
        case CREATE_POST_TITLE:
            return { ...state, title: action.payload };
        case CREATE_POST_CONTENT:
            return { ...state, content: action.payload };
        case CREATE_POST_SUCCESS:
            return initialState;
        case CREATE_POST_DISABLE_BUTTON:
            return { ...state, allowCreate: false };
        default:
            return state;
    }
}
