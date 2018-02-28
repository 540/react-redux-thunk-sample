import * as React from 'react';
import { connect } from 'react-redux';
import CourseList from './CourseList';
import { Course } from '../../redux/reducers/courseModel';
import { Link } from 'react-router-dom';

type Props = { courses: Course[] };

class CoursesPage extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const {courses} = this.props;

        return (
            <>
                <h1>Courses</h1>
                <Link to="/course" className="btn btn-primary" role="button">Add Course</Link>
                <CourseList courses={courses}/>
            </>
        );
    }
}

const mapStateToProps = (state: { courses: Course[] }) =>
    ({courses: state.courses});

export default connect(mapStateToProps)(CoursesPage);