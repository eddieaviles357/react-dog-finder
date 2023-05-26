import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Nav';

export default function Routes({dogs}) {
    return (
        <Switch>
            <Route exact path='/dogs'>
                <Nav dogs={dogs}/>
            </Route>
            <Route exact path='/dogs/:dog'>
                
            </Route>
            <Redirect to='/dogs' />
        </Switch>
    )
}