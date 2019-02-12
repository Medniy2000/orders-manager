import React from 'react'
import { BrowserRouter, Route, Switch,} from 'react-router-dom'
import 'semantic-ui-css/semantic.css'

import AuthRequireRouter from './components/AuthRequireRouter.jsx'
import OrdersManager from'./containers/OrdersState.js'
import Login from './containers/UserLogin.js'
import Register from  './containers/UserRegister.js'

import {isAuthenticated, refreshUser} from "./helpers/AuthUserHelper.js"


class App extends React.Component{
    render() {
        return (
            <div style={{minHeight:"100vh"}} onClick={refreshUser}>
                <BrowserRouter>
                    <Switch>
                        <AuthRequireRouter exact is_authenticated={isAuthenticated} path='/' component={OrdersManager}/>
                        <Route path='/login'  component={Login}/>
                        <Route path='/register' component={Register}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App