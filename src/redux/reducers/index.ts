import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import { Course } from './courseModel';
import { Author } from './authorModel';

export interface State {
    courses: Course[];
    authors: Author[];
    ajaxCallsInProgress: number;
}

export const initialState = {
    authors: [],
    courses: [],
    ajaxCallsInProgress: 0
};

export default {
    courses,
    authors,
    ajaxCallsInProgress
};