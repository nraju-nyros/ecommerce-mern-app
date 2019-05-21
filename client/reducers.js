/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';

import intl from './modules/Intl/IntlReducer';
import products from './modules/Products/ProductReducer';
import cart from './modules/Cart/CartReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
 
  intl,
  products,
  cart
});
