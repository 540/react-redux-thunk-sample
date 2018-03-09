import { combineReducers, createStore } from 'redux';
import reducers, { initialState } from '../reducers';
import * as courseActions from '../actions/courseActions';

describe('Store', function () {
    it('should handle creating courses', function () {
        // arrange
        const store = createStore(combineReducers(reducers), initialState);
        const course = {title: 'Clean Code'};

        store.dispatch(courseActions.createCourseSuccess(course));

        const actual = store.getState().courses[0];
        expect(actual).toEqual({title: 'Clean Code'});
    });
});