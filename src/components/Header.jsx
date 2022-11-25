import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import React from 'react'
import { routes } from "../routes";

function Header() {
  return (
    <div>
            <Link to={routes.home}>Home</Link>
            <Link to={routes.pokeList}>PokeList</Link>
            <Link to={routes.pokeTypes}>PokeTypes</Link>
    </div>
  )    
}

export default Header
    