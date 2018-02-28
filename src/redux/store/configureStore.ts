import { applyMiddleware, combineReducers, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { onDev } from '../../utils/executionUtils';
import thunk from 'redux-thunk';
import { Author } from '../reducers/authorModel';
import { Course } from '../reducers/courseModel';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import reducers from '../reducers';
import history from '../../lib/history';
import { reducer as notifications } from 'react-notification-system-redux';

type State = Readonly<{
    authors: Author[],
    courses: Course[],
}>;

const configureStore = (initialState: State) => {
    let middleware: Middleware[] = [
        thunk,
        routerMiddleware(history),
    ];

    return createStore(
        combineReducers(
            {
                ...reducers,
                router: routerReducer,
                notifications
            }
        ),
        initialState,
        onDev(composeWithDevTools({}), applyMiddleware(...middleware))
    );
};

export default configureStore;