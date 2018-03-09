import CourseForm from './CourseForm';
import { mount, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { builder as CourseBuilder } from '../../redux/reducers/courseModel';

describe('CourseForm test', () => {

    let props, wrapper: ShallowWrapper;
    beforeEach(() => {
        props = {
            course: CourseBuilder.empty(),
            saving: false,
            allAuthors: [],
            errors: {},
            onSave: () => {
            },
            onChange: () => {
            }
        };

        wrapper = render(<CourseForm {...props} />);
    });

    it('renders form and h1', () => {
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('Manage Course');
    });

    it('save button is labeled "Save" when not saving', () => {
        expect(wrapper.find('input').props().value).toBe('Save');
    });

    it('save button is labeled "Saving..." when saving', () => {
        wrapper.setProps({saving: true});

        expect(wrapper.find('input').props().value).toBe('Saving...');
    });
});