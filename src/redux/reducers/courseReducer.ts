import { Course } from './courseModel';
import ActionTypes from '../actions/actionTypes';
import { initialState } from './index';
import { Action } from 'redux';

type CoursesLoadAction = Action & { courses: Course[] };
type CourseCreateAction = Action & { course: Course };
type CourseUpdateAction = Action & { course: Course };

const courseReducer = (state: Course[] = initialState.courses, action: Action) => {
    switch (action.type) {
        case ActionTypes.LoadCoursesSuccess:
            return (<CoursesLoadAction> action).courses;
        case ActionTypes.CreateCourseSuccess:
            return [
                ...state,
                (<CourseCreateAction> action).course
            ];
        case ActionTypes.UpdateCourseSuccess:
            const updateAction = <CourseUpdateAction> action;
            return [
                ...state.filter(course => course.id !== updateAction.course.id),
                updateAction.course
            ].sort((a: Course, b: Course) => a.id.localeCompare(b.id));
        default:
            return state;
    }
};

export default courseReducer;