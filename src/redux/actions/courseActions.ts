import courseApi from '../../api/mockCourseApi';
import types from './actionTypes';
import { Course } from '../reducers/courseModel';
import { Action, Dispatch } from 'redux';
import { beginAjaxCall } from './ajaxStatusActions';
import { push } from 'react-router-redux';
import { success as successDialog } from 'react-notification-system-redux';

const loadCoursesSuccess = (courses: Course[]) =>
    ({type: types.LoadCoursesSuccess, courses});

export const updateCourseSuccess = (course: Course) =>
    ({type: types.UpdateCourseSuccess, course});

export const createCourseSuccess = (course: Course) =>
    ({type: types.CreateCourseSuccess, course});

export const loadCourses = () => (dispatch: Dispatch<Action>) => {
    dispatch(beginAjaxCall());

    return courseApi.getAllCourses()
        .then((courses: Course[]) => dispatch(loadCoursesSuccess(courses)))
        .catch(error => {
            throw(error);
        });
};

export const saveCourse = (course: Course) => async (dispatch: Dispatch<Action>) => {
    dispatch(beginAjaxCall());

    const savedCourse = await courseApi.saveCourse(course);

    if (course.id) {
        dispatch(updateCourseSuccess(savedCourse));
        dispatch(successDialog({
            title: 'Course saved',
            message: 'The course has been updated.',
        }));
    } else {
        dispatch(createCourseSuccess(savedCourse));
        dispatch(successDialog({
            title: 'Course saved',
            message: 'The course has been created.',
        }));
    }
    dispatch(push('/courses'));
    // .catch(error => {
    //     dispatch(ajaxCallError());
    //     dispatch(errorDialog({
    //         title: 'Course save error',
    //         message: 'Error: ' + error,
    //     }));
    // });
};