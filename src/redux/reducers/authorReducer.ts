import { Action } from 'redux';
import { Author } from './authorModel';
import { initialState } from './index';
import ActionTypes from '../actions/actionTypes';

type LoadAuthorsAction = Action & {
    authors: Author[];
};

const authorReducer = (state: Author[] = initialState.authors, action: LoadAuthorsAction) => {
    switch (action.type) {
        case ActionTypes.LoadAuthorsSuccess:
            return action.authors;
        default:
            return state;
    }
};

export default authorReducer;