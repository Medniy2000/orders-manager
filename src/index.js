import ReactDOM from 'react-dom'
import React from 'react'

import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import App from './App.js'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('mount-point')
)
