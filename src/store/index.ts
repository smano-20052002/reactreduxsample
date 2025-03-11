import { applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk'; // Correct import
import { legacy_createStore as createStore } from 'redux'; // Correct way to use legacy_createStore
import  rootReducer  from './rootReducer';

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);
