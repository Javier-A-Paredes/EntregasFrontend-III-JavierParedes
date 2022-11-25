import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Pokemon() {
    const params = useParams()
    console.log(params)
    const url = `https://pokeapi.co/api/v2/pokemon/${params.name}`
    useEffect(() => {
        axios(url)
        .then(res => console.log(res.data))
    }, [])
    return (
    <div>

    </div>
  )
}

export default Pokemon