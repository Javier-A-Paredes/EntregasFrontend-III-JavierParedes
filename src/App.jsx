import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import { routes } from "./routes";
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import PokeList from './pages/PokeList'
import PokeTypes from './pages/PokeTypes'
import Pokemon from './components/Pokemon'
function App() {  
  return (
   <Routes>
    <Route path={routes.home} element={<Home />}>
      <Route path={routes.pokeList} element={<PokeList />}/>
      <Route path={routes.pokeTypes} element={<PokeTypes />}/>
    </Route>
    <Route path='*' element={<PageNotFound />}/>    
   </Routes>
  )
}

export default App
