import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { navigationReducer } from '../navigation';
import sagas from './sagas';
import questionsReducer from './reducers/questionsReducer';
import optionReducer from './reducers/optionReducer';

const rootReducer = combineReducers({
  nav: navigationReducer,
  questionsArray: questionsReducer,
  options: optionReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = composeWithDevTools(
  applyMiddleware(sagaMiddleware),
);

const store = createStore(
  rootReducer,
  middlewares,
);

sagaMiddleware.run(sagas);

export default store;