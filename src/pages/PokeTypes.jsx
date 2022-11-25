import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes'

function PokeTypes() {
  return (
    <Link to={routes.pokeTypes}/>
  )
}

export default PokeTypes