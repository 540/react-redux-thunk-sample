import * as React from 'react';
import { Course } from '../../redux/reducers/courseModel';
import { Link } from 'react-router-dom';

type Props = {
    course: Course
};

const CourseListRow: React.StatelessComponent<Props> = ({course}) => {
    return (
        <tr>
            <td><a href={course.watchHref} target="_blank">Watch</a></td>
            <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
        </tr>
    );
};

export default CourseListRow;