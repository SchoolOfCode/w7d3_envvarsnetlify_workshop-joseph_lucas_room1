import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {

    async function getPokemon() {
      let response = await fetch("https://pokeapi.co/api/v2/pokemon/1", { headers: { accept: "application/json" } });


      let data = await response.json();
      console.log(data);
      setPokemon(data);
    }

    getPokemon();
  }, [])

  return (
    <div>
      <h1>This is the Pokemon:</h1>
      < img src={pokemon.sprites.front_default} />
    </div>
  );
}

export default App;



