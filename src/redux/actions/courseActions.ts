import { Course } from '../reducers/courseModel';
import ActionTypes from './actionTypes';

export type CreateCourseAction = {
    type: string;
    course: Course
};

export const createCourse = (course: Course) => {
    return {type: ActionTypes.CreateCourse, course};
};
