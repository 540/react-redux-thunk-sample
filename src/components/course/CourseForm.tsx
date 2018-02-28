import * as React from 'react';
import { FormEvent } from 'react';
import { Course } from '../../redux/reducers/courseModel';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import { Errors } from './ManageCoursePage';

type Props = Readonly<{
    course: Course;
    allAuthors: Array<{
        value: string
        text: string
    }>;
    onSave: () => void;
    onChange: (field: string, value: string) => void,
    saving?: boolean;
    errors: Errors;
}>;

const CourseForm: React.StatelessComponent<Props> = props => {
    const onSave = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (props.onSave) {
            props.onSave();
        }
    };

    const onChange = props.onChange;
    const course = props.course;
    const errors = props.errors;

    return (
        <form onSubmit={onSave}>
            <h1>Manage Course</h1>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title}
            />

            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="SelectAuthor"
                options={props.allAuthors}
                onChange={onChange}
                error={errors.authorId}
            />

            <TextInput
                name="category"
                label="Category"
                value={course.category}
                onChange={onChange}
                error={errors.category}
            />

            <TextInput
                name="length"
                label="Length"
                value={`${course.length}`}
                onChange={onChange}
                error={errors.length}
            />

            <input
                type="submit"
                disabled={props.saving}
                value={props.saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
            />
        </form>
    );
};

export default CourseForm;