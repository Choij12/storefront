import { createStore, combineReducers } from 'redux';

import catergoryReducer from './categories';

let reducers = combineReducers({ categories: catergoryReducer });

const store = () => {
  return createStore(reducers);
};

export default store;
