import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function PokemonItem({ name, pokemonDetails }) {
    const [details, setDetails] = useState("");
    useEffect(() => {
        pokemonDetails.forEach((details) => {
            if (name === details.name) {
                setDetails(details);
            }
        });
    });

    const pad = (n, length) => {
        var len = length - ("" + n).length;
        return (len > 0 ? new Array(++len).join("0") : "") + n;
    };

    return (
        <NavLink
            to={`/about/${details.id}`}
            className="shadow-md p-3 rounded-md text-center border border-gray-400"
        >
            {details && (
                <>
                    <img
                        className="object-fill h-48 w-full"
                        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pad(
                            details.id, 3
                        )}.png`}
                        alt={details.name}
                    />
                    <p className="text-red-400 py-2 capitalize font-bold">
                        {details.name}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {details["abilities"].map((data, key) => (
                            <div
                                key={key}
                                className="bg-purple-300 rounded-md capitalize font-bold"
                            >
                                {data["ability"].name}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </NavLink>
    );
}

export default PokemonItem;
