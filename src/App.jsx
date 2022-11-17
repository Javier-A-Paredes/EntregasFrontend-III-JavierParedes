import { useState } from 'react'
import PokemonCard from './components/PokemonCard'
import PokemonFuncion from './components/PokemonFuncion'
function App() {
  const [count, setCount] = useState(0)

  return (
    <PokemonCard />
    // <PokemonFuncion />
  )
}

export default App
