import ActionTypes from './actionTypes';

export const beginAjaxCall = () =>
    ({type: ActionTypes.BeginAjaxCall});

export const ajaxCallError = () =>
    ({type: ActionTypes.AjaxCallError});