import { initialState } from "./initial-state";
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export enum ActionTypes {
    QUESTION_ASK = 'QUESTION_ASK',
    QUESTION_ASK_REGISTERED = 'QUESTION_ASK_REGISTERED',
    QUESTION_LIST_REQUEST = 'QUESTION_LIST_REQUEST',
    QUESTION_LIST_REQUEST_SUCCESS = 'QUESTION_LIST_REQUEST_SUCCESS',
    QUESTION_LIST_REQUEST_FAILURE = 'QUESTION_LIST_REQUEST_FAILURE'
}

export interface Action{
    type:ActionTypes,
    data:any;
}

const reducer = ( state:any = initialState, action:Action) => {
    return state;
}

const store = createStore(reducer, composeWithDevTools()); // Create A Wrapping Store Object With a dispacth and subscribe method

export default store;