import React, { useState } from "react";
import "./App.css";

import PokemonViewer from "../PokemonViewer";

function App() {
  const [id, setId] = useState(Math.floor(Math.random() * 151) + 1);
  const [pokemon, setPokemon] = useState("");

  function handleClick() {
    // TODO: Set id to be random number between 1 and 151
    setId(Math.floor(Math.random() * 151) + 1);
  }

  return (
    <div className="App">
      {/* TODO: call handleClick when button clicked */}
      <button onClick={handleClick}>Get Random Pokemon</button>
      {/* TODO: hand down id as a prop */}
      <PokemonViewer id={id} pokemon={pokemon} setPokemon={setPokemon} />
    </div>
  );
}

export default App;
