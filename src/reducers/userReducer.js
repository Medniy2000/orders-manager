import users from '../prepared_data/users.json';
import {ADD_USER} from "../constants/ActionTypes";


export default function users_reducer(state = [], action) {
    switch (action.type) {
        case ADD_USER:
            state = [...state, action.payload];
            localStorage.setItem('users', JSON.stringify(state));
            return state;
        default:
            state = JSON.parse(localStorage.getItem('users'));
            if (!state) {
                localStorage.setItem('users', JSON.stringify(users));
                state = users
            }
            return state
    }
}