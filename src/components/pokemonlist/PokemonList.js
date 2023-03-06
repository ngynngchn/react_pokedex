//file import
// Component import
import PokemonArticle from "../pokemonarticle/PokemonArticle";

//Import npm
import { v4 as uuidv4 } from "uuid";

//library imports
import { useState, useEffect } from "react";

// CSS import
import "./PokemonList.css";

const PokemonList = ({ searchTerm, data, types, secondFilter, children }) => {
	const [poks, setPoks] = useState([]);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setPoks(data.results);
			});
	}, []);
	// useEffect(() => {
	// 	fetch(`https://pokeapi.co/api/v2/generation/1/`)
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setPoks(data.pokemon_species);
	// 		});
	// }, []);

	// Wenn FilteredTypePage auf PokemonList zugrefit, muss ein abgleich geschehen um nur die 1.Generation Pokemon anzugzeigen
	let pokemonSearch = true;
	return (
		<div className="pokemonList">
			{poks &&
				(!types
					? poks.map((pok) => {
							if (searchTerm) {
								if (pok.name.includes(searchTerm.toLowerCase())) {
									return <PokemonArticle key={uuidv4()} name={pok.name} />;
								} else {
									pokemonSearch = false;
								}
							} else return <PokemonArticle key={uuidv4()} name={pok.name} />;
					  })
					: data.map((pok) => {
							if (searchTerm) {
								if (pok.pokemon.name.includes(searchTerm.toLowerCase())) {
									return (
										<PokemonArticle
											key={uuidv4()}
											name={pok.pokemon.name}
											secondFilter={secondFilter}
										/>
									);
								} else {
									pokemonSearch = false;
								}
							} else
								return (
									<PokemonArticle
										key={uuidv4()}
										name={pok.pokemon.name}
										secondFilter={secondFilter}
									/>
								);
					  }))}

			{!pokemonSearch && (
				<h5>Sorry we could not find the pokemon you are looking for :( </h5>
			)}
		</div>
	);
};

export default PokemonList;
