import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Pokemon from "./Components/Pokemon";
import axios from "axios";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import Pagination from "./Components/Pagination";
import PokemonView from "./Components/PokemonView";

function App() {
    const [pokemon, setPokemon] = useState([]);
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [previous, setPrevious] = useState("");
    const [next, setNext] = useState("");
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                response.data.results.forEach((data) => {
                    axios
                        .get(data.url)
                        .then((response) => {
                            setPokemonDetails((oldArray) => [
                                ...oldArray,
                                response.data,
                            ]);
                        })
                        .catch((err) => {
                            throw err;
                        });
                });

                setPokemon(response.data.results);
                setPrevious(response.data.previous);
                setNext(response.data.next);
                setLoading(false);
                window.scrollTo(0, 0);
            })
            .catch((err) => {
                if (err) {
                    throw err;
                }
            });
    }, [url]);

    return (
        <Router>
            <div className="flex flex-col h-screen">
                <Header />
                <Switch>
                    <Route exact path="/about/:id">
                        <PokemonView />
                    </Route>
                    <Route exact path="/">
                        <div>
                            {!loading && (
                                <>
                                    <Pokemon
                                        pokemon={pokemon}
                                        pokemonDetails={pokemonDetails}
                                    />
                                    <Pagination
                                        previous={previous}
                                        next={next}
                                        setUrl={setUrl}
                                    />
                                </>
                            )}
                        </div>
                    </Route>
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
