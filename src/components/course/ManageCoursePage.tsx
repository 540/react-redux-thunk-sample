import * as React from 'react';
import { loadCourses, saveCourse } from '../../redux/actions/courseActions';
import CourseForm from './CourseForm';
import { builder as CourseBuilder, Course } from '../../redux/reducers/courseModel';
import { Author } from '../../redux/reducers/authorModel';
import { Action, bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { Option } from '../common/SelectInput';
import { authorsFormattedForDropDown } from '../../redux/reducers/authorSelectors';
import { RouteComponentProps } from 'react-router';

type Props = Readonly<{
    course: Course;
    authors: Option[];
    actions: {
        loadCourses: typeof loadCourses;
        saveCourse: typeof saveCourse;
    };
}> & RouteComponentProps<{ id: string }>;

type State = Readonly<{
    course: Course;
    authors: Option[];
    errors: Errors;
    redirectToCourses?: boolean;
    type: string;
}>;

export type Errors = Readonly<{
    title?: string;
    authorId?: string;
    category?: string;
    length?: string;
}>;

export class ManageCoursePage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            course: props.course || {},
            authors: props.authors,
            errors: {},
            type: '',
        };
    }

    componentWillReceiveProps(newProps: Props) {
        if (this.props.course.id !== newProps.course.id) {
            this.setState({course: newProps.course});
        }
    }

    render() {
        return (
            <CourseForm
                course={this.state.course}
                errors={this.state.errors}
                onChange={this.onFieldChange}
                allAuthors={this.props.authors}
                onSave={this.saveCourse}
                saving={false}
            />
        );
    }

    private onFieldChange = (field: string, value: string) =>
        this.setState({course: {...this.state.course, [field]: value}})

    private saveCourse = () => {
        if (!this.courseFormIsValid()) {
            return;
        }

        this.props.actions.saveCourse(this.state.course);
    }

    private courseFormIsValid = () => {
        let formIsValid = true;
        let errors = {};

        if (this.state.course.title.length < 5) {
            errors = {title: 'Title must be at least 5 characters.'};
            formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }
}

const getCourseById = (courses: Course[], id: string) => {
    return courses.find(course => course.id === id);
};

const mapStateToProps = (
    state: { authors: Author[], courses: Course[], ajaxCallsInProgress: number },
    ownProps: Props) => {
    const course = getCourseById(state.courses, ownProps.match!.params.id) || CourseBuilder.empty();

    return {
        course: course,
        authors: authorsFormattedForDropDown(state.authors),
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        actions: bindActionCreators({loadCourses, saveCourse}, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);