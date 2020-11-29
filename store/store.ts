import { applyMiddleware, createStore } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { useMemo } from 'react';
import { postsActionType } from '../interfaces/store/postTypes';
import { stateInterface } from '../interfaces/store/statesInterfaces';
import { createActionType } from '../interfaces/store/createTypes';

let store;

interface IStore {
    dispatch: ThunkDispatch<stateInterface, void, postsActionType | createActionType>;
    getState: () => stateInterface;
}

function initStore(initialState: stateInterface) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

export const initializeStore = (preloadedState: stateInterface | undefined = undefined): IStore => {
    let _store = store ?? initStore(preloadedState);

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        });
        // Reset the current store
        store = undefined;
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') {
        return _store;
    }
    // Create the store once in the client
    if (!store) store = _store;

    return _store;
};

export const useStore = (initialState: stateInterface): IStore =>
    useMemo(() => initializeStore(initialState), [initialState]);
