import {ADD_USER} from "../constants/ActionTypes"

import prepared_users from '../prepared_data/users.json'

const INITIAL_STATE = localStorage.getItem('app_data') ? JSON.parse(localStorage.getItem('app_data')).users : prepared_users

export default function users_reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_USER:
            state = [...state, action.payload]
            return state
        default:
            return state
    }
}