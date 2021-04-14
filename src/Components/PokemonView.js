import React, { useState, useEffect } from "react";
import { useParams, useHistory, NavLink } from "react-router-dom";
import axios from "axios";

function PokemonView() {
    let { id } = useParams();
    const history = useHistory();
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`, { signal })
            .then((response) => {
                setPokemon(response.data);
            })
            .catch((err) => {
                if (err) {
                    history.push("/");
                }
            });

        return function cleanup() {
            abortController.abort();
        };
    }, [id, pokemon, history]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto px-5 mt-6 pt-6 gap-3">
            {pokemon.id && (
                <div className="mt-5">
                    <img
                        className="object-fill"
                        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                        alt={pokemon.name}
                    />
                </div>
            )}
            {pokemon && (
                <div className="">
                    {pokemon.name && (
                        <div className="text-center mt-4 md:mt-6">
                            <div className="capitalize font-bold text-purple-800 grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div className="p-3 shadow-md rounded-md bg-pink-400 text-white font-extrabold">
                                    Name :
                                </div>
                                <div className="p-3 shadow-md rounded-md bg-purple-500 text-white">
                                    {pokemon.name}
                                </div>
                            </div>
                        </div>
                    )}
                    {pokemon["abilities"] && (
                        <div className="text-center mt-4 md:mt-6">
                            <div className="capitalize font-bold text-purple-800 grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div className="p-3 shadow-md rounded-md bg-pink-400 text-white font-extrabold">
                                    Abilities :
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {pokemon["abilities"].map(
                                        (ability, key) => (
                                            <div
                                                key={key}
                                                className="p-3 shadow-md rounded-md bg-purple-500 text-white"
                                            >
                                                {ability["ability"].name}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    {pokemon["types"] && (
                        <div className="text-center mt-4 md:mt-6">
                            <div className="capitalize font-bold text-purple-800 grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div className="p-3 shadow-md rounded-md bg-pink-400 text-white font-extrabold">
                                    Type :
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {pokemon["types"].map((type, key) => (
                                        <div
                                            key={key}
                                            className="p-3 shadow-md rounded-md bg-purple-500 text-white"
                                        >
                                            {type["type"].name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                    {pokemon.height && (
                        <div className="text-center mt-4 md:mt-6">
                            <div className="font-bold text-purple-800 grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div className="p-3 shadow-md rounded-md bg-pink-400 text-white font-extrabold">
                                    Height :
                                </div>
                                <div className="p-3 shadow-md rounded-md bg-purple-500 text-white">
                                    {pokemon.height} cm
                                </div>
                            </div>
                        </div>
                    )}
                    {pokemon.weight && (
                        <div className="text-center mt-4 md:mt-6">
                            <div className="font-bold text-purple-800 grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div className="p-3 shadow-md rounded-md bg-pink-400 text-white font-extrabold">
                                    Weight :
                                </div>
                                <div className="p-3 shadow-md rounded-md bg-purple-500 text-white">
                                    {pokemon.weight} kg
                                </div>
                            </div>
                        </div>
                    )}
                    {pokemon.name && (
                        <div className="text-center my-4 md:my-6">
                            <NavLink
                                to="/"
                                className="font-bold grid grid-cols-1 gap-2"
                            >
                                <div className="p-3 shadow-md rounded-md bg-red-400 text-white font-extrabold">
                                    Back
                                </div>
                            </NavLink>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default PokemonView;
