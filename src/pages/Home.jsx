import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Bienvenidos a mi pokedex</h1>
        <Outlet />
    </div>
  )
}

export default Home