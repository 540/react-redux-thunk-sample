import authorApi from '../../api/mockAuthorApi';
import types from './actionTypes';
import { Author } from '../reducers/authorModel';
import { Dispatch } from 'react-redux';
import { Action } from 'redux';
import { beginAjaxCall } from './ajaxStatusActions';

const loadAuthorsSuccess = (authors: Author[]) =>
    ({type: types.LoadAuthorsSuccess, authors});

export const loadAuthors = () => async (dispatch: Dispatch<Action>) => {
    dispatch(beginAjaxCall());

    const authors: Author[] = await authorApi.getAllAuthors();
    dispatch(loadAuthorsSuccess(authors));
};