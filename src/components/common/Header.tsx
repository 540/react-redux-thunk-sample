import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.StatelessComponent<{}> = () => {
    return (
        <nav>
            <NavLink exact={true} to="/" activeClassName="active">Home</NavLink>
            {' | '}
            <NavLink exact={true} to="/courses" activeClassName="active">Courses</NavLink>
            {' | '}
            <NavLink exact={true} to="/about" activeClassName="active">About</NavLink>
        </nav>
    );
};

export default Header;