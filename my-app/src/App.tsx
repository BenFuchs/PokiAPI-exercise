import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pokeName, setpokeName] = useState<string[]>([])
  const APIURL = 'https://pokeapi.co/api/v2/pokemon/';

  const fetchPokeName = async ()=> {
    const response = await fetch(APIURL).then((res)=> res.json())
    console.log(response) 
    setpokeName(response.results.map((pokemon: {name: string}) => pokemon.name))
  }

  useEffect(() => {
    fetchPokeName()
  }, [])

  return (
    <>
    {pokeName.map((name, index)=> (
      <li key={index}>{name}</li>
    ))}
    </>
  )
}

export default App
