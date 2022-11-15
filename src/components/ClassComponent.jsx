import React, { Component, useState } from 'react'
import data from './pokemons'
// const types = ["fire", "water", "rock"] 
const types = Object.keys(data)

export class ClassComponent extends Component {
  
  state = {
    index:  0,
    indexTypes: 0,
    name: "",
    imgUrl: ""
  }
  
  botonNext = () => {
    if(this.state.index + 1 >= data[types[this.state.indexTypes]].length){                
        this.setState({ indexTypes: (this.state.indexTypes + 1) % types.length, index: 0 })
    } else {
        this.setState({index: this.state.index + 1})    
    }    
  }

  botonPrev = () => { 
    if(this.state.indexTypes - 1 < 0 && this.state.index - 1 < 0){
        this.setState({indexTypes: types.length - 1, index: types.length - 1})
    } else if (this.state.indexTypes - 1 > 0 && this.state.index > 0){
        this.setState({ index: this.state.index - 1})
    } else if (this.state.index == 0) {
        this.setState({index: types.length - 1, indexTypes: this.state.indexTypes - 1})
    }
    else{
        this.setState({index: this.state.index - 1})
    }
  }

    componentDidMount(){
        const pokemonInfo = data[types[this.state.indexTypes]][this.state.index]
        this.setState({name: pokemonInfo.pokemonName, imgUrl: pokemonInfo.avatar})
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevState.index != this.state.index){
            const pokemonInfo = data[types[this.state.indexTypes]][this.state.index]
            this.setState({name: pokemonInfo.pokemonName, imgUrl: pokemonInfo.avatar})
        }    
    }

  
    render() {           
      console.log('indextypes: ',this.state.indexTypes);  
      console.log('index:', this.state.index)
    return (
      <div className='container' style={{border: "2px green solid"}}>
        <img src={this.state.imgUrl} alt={this.state.name} style={{width: "150px", height: "120px"}}/>
        <h2>{this.state.name}</h2>
        <div className='buttonContainer'>
        <button className='buttonPrev' onClick={() => this.botonPrev()}>PREV</button>
        <button className='buttonNext'onClick={() => this.botonNext()}>NEXT</button>
        </div>
      </div>
    )
  }
}

export default ClassComponent