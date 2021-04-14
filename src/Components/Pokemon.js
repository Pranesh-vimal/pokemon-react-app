import React from "react";
import PokemonItem from "./PokemonItem";

function Pokemon({ pokemon, pokemonDetails }) {
    return (
        <div className="w-full mx-auto px-5 mt-6 pt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-3">
                {pokemon.map((data, key) => (
                    <PokemonItem
                        key={key}
                        pokemonDetails={pokemonDetails}
                        name={data.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Pokemon;
