import React from "react";
import { NavLink } from 'react-router-dom';

export default function Nav({dogs}) {
    // keys should not be index use uuid npm instead
    const dogNavLinks = dogs.map((dog, idx)=><li key={idx}><NavLink exact to={`/dogs/${dog.name}`}>{dog.name}</NavLink></li>)

    return (
        <nav className='Nav'>
            <h1>Dogs</h1>
            <ul>
            {dogNavLinks}
            </ul>
        </nav>
    )
}