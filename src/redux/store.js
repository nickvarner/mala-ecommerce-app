import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import rootReducer from './root-reducer';
import thunk from 'redux-thunk';

const middlewares = [ logger, thunk ];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
