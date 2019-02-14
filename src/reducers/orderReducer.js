import {ADD_ORDER, DELETE_ORDER, UPDATE_ORDER} from "../constants/ActionTypes"
import orders from '../prepared_data/orders.json'

export default function orders_reducer(state = [], action) {

    switch (action.type) {
        case ADD_ORDER:
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