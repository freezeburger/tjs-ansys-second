import { ofType } from "redux-observable";
import { mapTo, delay, mergeMap, tap ,map} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { ActionTypes } from "./actions";

const API = 'http://localhost:5050/questions';

const apiSideEffect = (action$:any) => action$.pipe(
    ofType(ActionTypes.QUESTION_LIST_REQUEST),
    mergeMap(
        action => ajax.getJSON(API).pipe(
            tap(console.log),
            map( response => ({ type: ActionTypes.QUESTION_LIST_REQUEST_SUCCESS, data:response}))
        )
    )
    // mapTo({ type: ActionTypes.QUESTION_LIST_REQUEST_SUCCESS, data:null})
);

export { apiSideEffect };