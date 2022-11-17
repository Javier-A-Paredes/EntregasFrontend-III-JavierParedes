import React, { useState, useEffect } from 'react'
import axios from 'axios'
function PokemonFuncion() {
    const [index, setIndex] = useState(1)
    const [ pokemonInfo, setPokemonInfo ] = useState(null)
    
    async function getData(id){
        axios.get(` https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {      
            console.log(res.data)                  
            setPokemonInfo(res.data)
        })      
        .catch(err => console.log(err))  
    }
    
    const botonNext = () =>{
        setIndex(index + 1)
    }

    const botonPrev = () => {
        if(index > 1){
            setIndex(index - 1)
        }
    }
    useEffect(()=>{              
        getData(index)
    },[index])


  return (
    <div className='container' style={{border: "2px green solid"}}>
            <img src={pokemonInfo?.sprites.other["official-artwork"].front_default} alt={pokemonInfo?.name} style={{width: "200px"}}/>
            <h2>{pokemonInfo?.name}</h2>
        <div className='buttonContainer'>
            <button className='buttonPrev' onClick={() => botonPrev()}>PREV</button>
            <button className='buttonNext'onClick={() => botonNext()}>NEXT</button>
        </div>
    </div>
  )
}

export default PokemonFuncion