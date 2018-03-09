import thunk from 'redux-thunk';
import * as courseActions from '../actions/courseActions';
import ActionTypes from '../actions/actionTypes';
import configureMockStore from 'redux-mock-store';

describe('Course Actions', () => {
    describe('createCourseSuccess', () => {
        it('should create a CREATE_COURSE_SUCCESS action', () => {
            const course = {id: 'clean-code', title: 'Clean Code'};
            const expectedAction = {type: ActionTypes.CreateCourseSuccess, course: course};

            const action = courseActions.createCourseSuccess(course);

            expect(action).toEqual(expectedAction);
        });
    });
});

const mockStore = configureMockStore([thunk]);

describe('Async Actions', () => {
    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        const expectedActions = [
            {type: ActionTypes.BeginAjaxCall},
            {type: ActionTypes.LoadCoursesSuccess, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
        ];

        const store = mockStore({courses: []}, expectedActions);
        store.dispatch(courseActions.loadCourses()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(ActionTypes.BeginAjaxCall);
            expect(actions[1].type).toEqual(ActionTypes.LoadCoursesSuccess);
            done();
        });
    });
});