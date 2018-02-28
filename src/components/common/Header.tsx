import * as React from 'react';
import { NavLink } from 'react-router-dom';
import LoadingDots from './LoadingDots';

type Props = { loading: boolean };

const Header: React.StatelessComponent<Props> = ({loading}) => {
    return (
        <nav>
            <NavLink exact={true} to="/" activeClassName="active">Home</NavLink>
            {' | '}
            <NavLink exact={true} to="/courses" activeClassName="active">Courses</NavLink>
            {' | '}
            <NavLink exact={true} to="/about" activeClassName="active">About</NavLink>
            {loading && <LoadingDots interval={100} dots={20}/>}
        </nav>
    );
};

export default Header;