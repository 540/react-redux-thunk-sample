import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import configureStore from './redux/store/configureStore';
import { loadCourses } from './redux/actions/courseActions';
import { loadAuthors } from './redux/actions/authorActions';
import { initialState } from './redux/reducers/index';
import { ConnectedRouter } from 'react-router-redux';
import history from './lib/history';

const store = configureStore(initialState);

store.dispatch(loadCourses);
store.dispatch(loadAuthors);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App>
                <Switch>
                    <Route exact={true} path="/" component={HomePage}/>
                    <Route exact={true} path="/courses" component={CoursesPage}/>
                    <Route exact={true} path="/course" component={ManageCoursePage}/>
                    <Route exact={true} path="/course/:id" component={ManageCoursePage}/>
                    <Route exact={true} path="/about" component={AboutPage}/>
                </Switch>
            </App>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();
