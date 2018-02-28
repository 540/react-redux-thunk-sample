import * as React from 'react';
import * as courseActions from '../../redux/actions/courseActions';
import { loadCourses, saveCourse } from '../../redux/actions/courseActions';
import CourseForm from './CourseForm';
import { Course } from '../../redux/reducers/courseModel';
import { Author } from '../../redux/reducers/authorModel';
import { Action, bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { Option } from '../common/SelectInput';
import { RouteComponentProps } from 'react-router-dom';

type Props = Readonly<{
    course: Course;
    authors: Option[];
    saving: boolean;
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
    saving: boolean;
}>;

export type Errors = Readonly<{
    title?: string;
    authorId?: string;
    category?: string;
    length?: string;
}>;

class ManageCoursePage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            course: props.course,
            authors: props.authors,
            errors: {},
            type: '',
            saving: false
        };
    }

    componentWillReceiveProps(newProps: Props) {
        if (this.props.course.id !== newProps.course.id) {
            this.setState({course: newProps.course});
        }
        if (this.props.saving !== newProps.saving) {
            this.setState({saving: newProps.saving});
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
                saving={this.state.saving}
            />
        );
    }

    private onFieldChange = (field: string, value: string) =>
        this.setState({course: {...this.state.course, [field]: value}})

    private saveCourse = () => {
        this.props.actions.saveCourse(this.state.course);
    }
}

const getCourseById = (courses: Course[], id: string) => {
    return courses.find(course => course.id === id);
};

const mapStateToProps = (
    state: { authors: Author[], courses: Course[], ajaxCallsInProgress: number },
    ownProps: Props) => {
    let course = getCourseById(state.courses, ownProps.match.params.id);

    if (!course) {
        course = {id: '', watchHref: '', title: '', authorId: '', length: 0, category: ''};
    }

    const authorsFormattedForDropDown = state.authors.map(author => ({
        value: author.id,
        text: author.firstName + ' ' + author.lastName
    }));

    return {
        course: course,
        authors: authorsFormattedForDropDown,
        saving: state.ajaxCallsInProgress > 0
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);