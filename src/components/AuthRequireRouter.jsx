import React from 'react';
import {Route, Redirect} from 'react-router-dom'

export default ({component: Component, is_authenticated, rest}) => {
    let authenticated = is_authenticated();
    return (
        <Route
            {...rest}
            render={(props) => authenticated === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
        />
    )
}