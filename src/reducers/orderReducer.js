import {ADD_ORDER, DELETE_ORDER, UPDATE_ORDER} from "../constants/ActionTypes"
import {filter, map} from 'lodash/collection'
import prepared_orders from '../prepared_data/orders.json'

const INITIAL_STATE = localStorage.getItem('app_data') ? JSON.parse(localStorage.getItem('app_data')).orders : prepared_orders

export default function orders_reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_ORDER:
            state = [...state, action.payload]
            return state
        case UPDATE_ORDER:
            state = map(state, order => {
                if (order.id === action.payload.id){
                    order = action.payload
                }
                return order
            })
            return state
        case DELETE_ORDER:
            state = filter(state, order => order.id !== action.payload.id)
            return state
        default:
            return state
    }
}