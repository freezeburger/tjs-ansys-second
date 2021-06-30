import { initialState } from "./initial-state";
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Action, ActionTypes } from "./actions";
import { createEpicMiddleware } from 'redux-observable';
import { apiSideEffect } from "./side-effects";

const epicMiddleware = createEpicMiddleware();

const reducer = (state: any = {}, action: Action) => {

    switch (action.type) {
        
        case ActionTypes.QUESTION_ASK:
            return { ...state, loading:true };

        case ActionTypes.QUESTION_ASK_REGISTERED:
            return { ...state, loading:false };

        case ActionTypes.QUESTION_LIST_REQUEST:
            return { ...state, loading:true };

        case ActionTypes.QUESTION_LIST_REQUEST_FAILURE:
            return { ...state, loading:false };

        case ActionTypes.QUESTION_LIST_REQUEST_SUCCESS:
            return { ...state, loading:false, questions: action.data };

        default:
            return state;
    }


}


const store = createStore(
    reducer, 
    {
        loading:false,
        questions:[]
    }, 
    composeWithDevTools(
        applyMiddleware(epicMiddleware)
    )); // Create A Wrapping Store Object With a dispacth and subscribe method

epicMiddleware.run(apiSideEffect);

export { ActionTypes } from './actions';
export default store;