import { Action } from 'redux';
import { Course } from './courseModel';
import ActionTypes from '../actions/actionTypes';

type CourseAction = Action & {
    course: Course;
};

export type CourseState = Array<Course>;

const courseReducer = (state: CourseState = [], action: CourseAction) => {
    switch (action.type) {
        case ActionTypes.CreateCourse:
            return [
                ...state,
                {...action.course}
            ];
        default:
            return state;
    }
};

export default courseReducer;