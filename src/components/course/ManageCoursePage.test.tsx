import { ManageCoursePage } from './ManageCoursePage';
import { mount } from 'enzyme';
import * as React from 'react';
import { builder as CourseBuilder } from '../../redux/reducers/courseModel';

describe('Manage course page', () => {

    it('sets error message when trying to save an empty title', () => {
        const saveCourse = jest.fn();
        const props = {
            course: CourseBuilder.empty(),
            authors: [],
            actions: {
                saveCourse,
                loadCourses: () => {
                }
            }
        }
        const wrapper = mount(<ManageCoursePage {...props}/>);
        const saveForm = wrapper.find('form');

        saveForm.simulate('submit');

        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
        expect(saveCourse).not.toBeCalled();
    });

});