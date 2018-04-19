import { combineReducers } from 'redux';

import CartReducer from '../reducer/cart';

export default combineReducers({
  cart: CartReducer,
});