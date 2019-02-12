import {ADD_ORDER, DELETE_ORDER, UPDATE_ORDER} from "../constants/ActionTypes"
import orders from '../prepared_data/orders.json'

import {map} from 'lodash/collection'

export default function orders_reducer(state = [], action) {

    switch (action.type) {
        case ADD_ORDER:
            action.payload.id = (state) => {
                let next_id = 0
                let order_ids = map(state, (value) => {
                    return value.id
                })
                if (order_ids.length > 0) {
                    next_id = Math.max(...order_ids)
                }
                return next_id + 1
            }
            state = [...state, action.payload]
            localStorage.setItem('orders', JSON.stringify(state))
            return state
        case UPDATE_ORDER:
            state = state.map( order => {
                if (order.id === action.payload.id){
                    order = action.payload
                }
                return order
            })
            localStorage.setItem('orders', JSON.stringify(state))
            return state
        case DELETE_ORDER:
            state = state.filter(order => order.id !== action.payload.id)
            localStorage.setItem('orders', JSON.stringify(state))
            return state
        default:
            state = JSON.parse(localStorage.getItem('orders'))
            if (!state) {
                localStorage.setItem('orders', JSON.stringify(orders))
                state = orders
            }
            return state
    }
}