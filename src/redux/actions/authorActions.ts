import authorApi from '../../api/mockAuthorApi';
import types from './actionTypes';
import { Author } from '../reducers/authorModel';
import { Dispatch } from 'react-redux';
import { Action } from 'redux';
import { beginAjaxCall } from './ajaxStatusActions';

const loadAuthorsSuccess = (authors: Author[]) =>
    ({type: types.LoadAuthorsSuccess, authors});

export const loadAuthors = (dispatch: Dispatch<Action>) => {
    dispatch(beginAjaxCall());

    authorApi.getAllAuthors()
        .then((authors: Author[]) => dispatch(loadAuthorsSuccess(authors)))
        .catch(error => {
            throw(error);
        });
};