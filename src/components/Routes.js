import React, {useState} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Nav';
import DogDetails from './DogDetail';
import dogs from '../dogs';

export default function Routes() {
    const [dogState] = useState(dogs);

    const getDog = (dogName) => {
        const foundDog = dogState.find(dogs => dogs['name'] === dogName)
        return foundDog;
    };
    
    return (
        <Switch>
            <Route exact path='/dogs'>
                <Nav dogs={dogState}/>
            </Route>
            <Route exact path='/dogs/:dog'>
                <DogDetails getDog={getDog} />
            </Route>
            <Redirect to='/dogs' />
        </Switch>
    )
}