import React, { Component, useState } from 'react'
import axios from 'axios'

export class PokemonCard extends Component {
    
    state = {
        id: 1,
        pokemon: null
    }

    getData = async (id) =>{
        axios.get(` https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {        
            this.setState({ pokemon: res.data })
        })        
    }

    botonNext = () =>{
        this.setState({ id: this.state.id + 1 })        
    }

    botonPrev = () => {
        if(this.state.id > 1){
            this.setState({id: this.state.id - 1})
        }
    }
    componentDidMount(){
        this.getData(this.state.id)
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.id != this.state.id){
            this.getData(this.state.id)
        }
    }
  render() {        
    return (
        <div className='container' style={{border: "2px green solid"}}>
            <img src={this.state.pokemon?.sprites.other["official-artwork"].front_default} alt={this.state.pokemon?.name} style={{width: "200px"}}/>
            <h2>{this.state.pokemon?.name}</h2>
        <div className='buttonContainer'>
            <button className='buttonPrev' onClick={() => this.botonPrev()}>PREV</button>
            <button className='buttonNext'onClick={() => this.botonNext()}>NEXT</button>
        </div>
      </div>
    )
  }
}

export default PokemonCard