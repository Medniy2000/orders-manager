import ReactDOM from 'react-dom'
import React from 'react'

import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import App from './App.js'

import prepared_users from './prepared_data/users.json'
import prepared_orders from './prepared_data/orders.json'
import prepared_dishes from './prepared_data/dishes.json'

let persistedState = {
    "users":  [],
    "orders": [],
    "dishes": []
}

if(localStorage.getItem('app_data')) {
    persistedState = JSON.parse(localStorage.getItem('app_data'))
}else {
    persistedState.users =prepared_users
    persistedState.orders = prepared_orders
    persistedState.dishes = prepared_dishes
    localStorage.setItem('app_data', JSON.stringify(persistedState))
}

const store = createStore(
    rootReducer,
    persistedState,
applyMiddleware(thunk)
)

store.subscribe(
    ()=>{
        localStorage.setItem('app_data', JSON.stringify(store.getState()))
    }
)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('mount-point')
)
