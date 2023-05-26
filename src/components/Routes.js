import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/dogs' ></Route>
            <Route exact path='/dogs/:dog' ></Route>
            <Redirect to='/dogs' />
        </Switch>
    )
}