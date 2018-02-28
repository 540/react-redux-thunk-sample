import * as React from 'react';
import { Course } from '../../redux/reducers/courseModel';
import CourseListRow from './CourseListRow';

type Props = {
    courses: Course[]
};

const CourseList: React.StatelessComponent<Props> = ({courses}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Length</th>
            </tr>
            </thead>
            <tbody>
            {courses.map((course: Course) => (<CourseListRow key={course.id} course={course}/>))}
            </tbody>
        </table>
    );
};

export default CourseList;