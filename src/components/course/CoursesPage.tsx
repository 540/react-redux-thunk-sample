import * as React from 'react';
import { ChangeEvent, FormEvent } from 'react';
import { connect, Dispatch } from 'react-redux';
import { Course } from '../../redux/reducers/courseModel';
import { State as CoursesState } from '../../redux/reducers';
import { Action, bindActionCreators } from 'redux';
import * as courseActions from '../../redux/actions/courseActions';
import { createCourse as CreateCourseAction } from '../../redux/actions/courseActions';

type State = Readonly<{
    course: Course;
}>;

type Props = CoursesState & {
    actions: {
        createCourse: typeof CreateCourseAction
    }
};

class CoursesPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            course: {title: ''}
        };
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <form onSubmit={this.onSave}>
                    <input
                        type="text"
                        onChange={this.onTitleChange}
                        value={this.state.course.title}
                    />

                    <input
                        type="submit"
                        value="Save"
                    />
                </form>
            </div>
        );
    }

    private courseRow = (course: Course, index: number) => {
        return <div key={index}>{course.title}</div>;
    }

    private onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({course: {title: event.target.value}});
    }

    private onSave = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        this.props.actions.createCourse(this.state.course);
        this.setState({course: {title: ''}});
    }
}

const mapStateToProps = (state: CoursesState) => (
    {
        courses: state.courses
    }
);

const mapDispatchToProps = (dispatch: Dispatch<Action>) => (
    {
        actions: bindActionCreators(courseActions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);