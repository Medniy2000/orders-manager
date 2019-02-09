import { combineReducers } from 'redux';

import orders_reducer from './orderReducer.js';
import users_reducer from './userReducer.js';
import dishes_reducer from "./dishReducer";

export default combineReducers({
    orders: orders_reducer,
    dishes: dishes_reducer,
    users: users_reducer
});