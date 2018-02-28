import ActionTypes from '../actions/actionTypes';
import { initialState } from './index';
import { Action } from 'redux';

const actionTypeEndsInSuccess = (type: ActionTypes) =>
    type.valueOf().endsWith('_SUCCESS');

const ajaxStatusReducer = (state: number = initialState.ajaxCallsInProgress, action: Action) => {
    if (action.type === ActionTypes.BeginAjaxCall) {
        return state + 1;
    } else if (actionTypeEndsInSuccess(action.type) || action.type === ActionTypes.AjaxCallError) {
        return state - 1;
    }

    return state;
};

export default ajaxStatusReducer;