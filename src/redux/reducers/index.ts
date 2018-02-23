import { combineReducers } from 'redux';
import coursesReducer from './courseReducer';
import { Course } from './courseModel';

export type State = Readonly<{
    courses: Course[];
}>;

const state = combineReducers<State>({
    courses: coursesReducer
});

export default state;