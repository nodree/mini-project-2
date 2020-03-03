import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

// const middlewares = [thunk];


const store = createStore(rootReducer, composeWithDevTools());

export default store;