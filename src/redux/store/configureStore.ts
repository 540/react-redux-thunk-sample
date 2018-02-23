import { applyMiddleware, createStore, Middleware } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { onDev } from '../../utils/executionUtils';

const configureStore = (initialState = {}) => {
    let middleware: Middleware[] = [];

    return createStore(
        rootReducer,
        initialState,
        onDev(composeWithDevTools({}), applyMiddleware(...middleware))
    );
};

export default configureStore;