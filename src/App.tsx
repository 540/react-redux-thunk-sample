import * as React from 'react';
import { ReactNode } from 'react';
import './App.css';
import Header from './components/common/Header';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as Notifications from 'react-notification-system-redux';
import { Notification } from 'react-notification-system';

type Props = Readonly<{
    loading: boolean,
    children: ReactNode
    notifications: Notification[],
}> & RouteComponentProps<{}>;

const App: React.StatelessComponent<Props> = ({loading, children, notifications}) => {
    return (
        <div className="container-fluid App">
            <Header loading={loading}/>
            {children}
            <Notifications
                notifications={notifications}
            />
        </div>
    );
};

const mapStateToProps = (state: { ajaxCallsInProgress: number, notifications: Notification[] }) => {
    return {
        loading: state.ajaxCallsInProgress > 0,
        notifications: state.notifications
    };
};

export default withRouter(connect(mapStateToProps)(App));
