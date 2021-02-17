import React, { useState, useEffect } from "react";

function PokemonViewer({ id, pokemon, setPokemon }) {
  // TODO: send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
  // HINT: you will need useState and useEffect!


  // UseEffect
  useEffect(() => {
    async function getPokemon() {
      let response = await fetch(
        `${process.env.REACT_APP_API_URL}${id}`,
        { headers: { accept: "application/json" } }
      );
      let data = await response.json();
      setPokemon(data);
      console.log(process.env.REACT_APP_API_URL);
      console.log(pokemon);
    }
    getPokemon();
  }, [id])

  return (
    <div className="pokemon-viewer">
      <p>Display pokemon with id {id} here!</p>

      < img src={pokemon.sprites?.front_default} />

    </div>
  );
}

export default PokemonViewer;
