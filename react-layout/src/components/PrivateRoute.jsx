import React from 'react';
import { Route, Redirect } from 'react-router-dom'



const PrivateRoute = ({ component: Component, auth, path, ...rest }) => {
    return <Route {...rest} path='/' render={(props) => {
        // console.log(auth);
        if (auth) {
            return (
                <Component {...props} />
            )
        } else {
            return (
                <Redirect to={{ pathname: "/" }} />
            )
        }
    }} />
}

export default PrivateRoute;