import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from './middleware/thunk.js';

import categoryReducer from './categories';
import productReducer from './products';
import cartReducer from './cart';

let reducers = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,
});

let store = () => {
  return createStore(reducers, applyMiddleware(thunk));
};

export default store;