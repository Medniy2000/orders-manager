import ReactDOM from 'react-dom'
import React from 'react'

import { Provider } from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers'
import App from './App.js'

const store = createStore(rootReducer)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('mount-point')
)
