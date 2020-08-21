import { combineReducers } from 'redux';

import CartReducer from '../reducer/cart';
import UserReducer from '../reducer/user';

export default combineReducers({
  cart: CartReducer,
  user: UserReducer,
});
