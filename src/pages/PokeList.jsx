import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
function PokeList() {
    const [ pokeList, setPokeList ] = useState([])
    const url= 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
    useEffect(() => {
        axios.get(url)
        .then(res => setPokeList(res.data.results))
    }, [])
    
  return (
    <h2>Lista</h2>
  )
}

export default PokeList