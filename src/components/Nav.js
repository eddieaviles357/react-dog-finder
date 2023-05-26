import React from "react";
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <NavLink exact to='/dogs'>Dogs</NavLink>
        </nav>
    )
}