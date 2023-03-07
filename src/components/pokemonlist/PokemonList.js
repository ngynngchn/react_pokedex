//file import
// Component import
import PokemonArticle from "../pokemonarticle/PokemonArticle";

//Import npm
import { v4 as uuidv4 } from "uuid";

//library imports
import { useState, useEffect } from "react";

import { React } from "react";

// CSS import
import "./PokemonList.css";

const PokemonList = ({ searchTerm, data, types, secondFilter, home }) => {
	// Declare and initialize state variables
	const [poks, setPoks] = useState([]);
	const [offset, setOffset] = useState(0);

	/* 	const divRef = useRef(null);

	const [empty, setEmpty] = useState(false);

	useEffect(() => {
		if (!divRef.current.children.length) {
			setEmpty(true);
			console.log("NOT FOUND");
		} else {
			setEmpty(false);
			console.log("WE FOUND YOU");
		}
	}, [divRef.current]);
	console.log(!divRef.current.children.length);
 */
	// Define function to fetch more Pokemon data
	function showMore() {
		// Send a GET request to the PokeAPI to fetch the next 20 Pokemon data
		fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset + 20}&limit=20`)
			.then((response) => response.json())
			.then((data) => {
				// Append the new Pokemon data to the existing list of Pokemon
				setPoks([...poks, ...data.results]);
				// setZP(data.results);
				// Update the offset state variable to fetch the next set of Pokemon data in the next call to showMore()
				setOffset(offset + 20);
			});
	}

	// Use useEffect() to fetch the initial set of Pokemon data
	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`)
			.then((response) => response.json())
			.then((data) => {
				// Set the initial list of Pokemon data in the state variable poks
				setPoks(data.results);
				// setZP(data.results);
			});
	}, []);

	// Declare a boolean variable to track whether any Pokemon matches the search term
	let pokemonSearch = false;

	return (
		<div id="pokemonList">
			{/* Render PokemonArticle components for each Pokemon in poks or data that matches the search term */}
			{/* <div ref={divRef} className="pokemonList">
			</div> */}
			{poks &&
				(!types
					? poks.map((pok) => {
							if (pok.name.includes(searchTerm.toLowerCase())) {
								// Set pokemonSearch to true if any Pokemon matches the search term
								pokemonSearch = true;
								return <PokemonArticle key={uuidv4()} name={pok.name} />;
							} else {
								return null;
							}
					  })
					: data.map((pok) => {
							if (pok.pokemon.name.includes(searchTerm.toLowerCase())) {
								// Set pokemonSearch to true if any Pokemon matches the search term
								pokemonSearch = true;
								return (
									<PokemonArticle
										key={uuidv4()}
										name={pok.pokemon.name}
										secondFilter={secondFilter}
									/>
								);
							} else {
								return null;
							}
					  }))}

			{/* Render a message if no Pokemon matches the search term */}
			{!pokemonSearch && searchTerm ? (
				<h5>Sorry we could not find the pokemon you are looking for :( </h5>
			) : null}

			{/* Render a button to fetch more Pokemon data */}
			{home && <button onClick={showMore}>Load More</button>}
		</div>
	);
};

export default PokemonList;
