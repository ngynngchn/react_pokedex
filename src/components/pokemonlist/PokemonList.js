//file import
// Component import
import PokemonArticle from "../pokemonarticle/PokemonArticle";

//Import npm
import { v4 as uuidv4 } from "uuid";

//library imports
import { useState, useEffect } from "react";

// CSS import
import "./PokemonList.css";

const PokemonList = ({ searchTerm, data, types, secondFilter }) => {
	const [poks, setPoks] = useState([]);

	// useEffect(() => {
	// 	fetch("https://pokeapi.co/api/v2/pokemon")
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setPoks(data);
	// 		});
	// }, []);
	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/generation/1/`)
			.then((response) => response.json())
			.then((data) => {
				setPoks(data.pokemon_species);
			});
	}, []);

	// Wenn FilteredTypePage auf PokemonList zugrefit, muss ein abgleich geschehen um nur die 1.Generation Pokemon anzugzeigen

	if (data && poks) {
		console.log("poks", poks);
		console.log("data", data);
	}

	return (
		<div className="pokemonList">
			{/* {poks &&
					poks.results.map((pok) => {
						return <PokemonArticle key={uuidv4()} name={pok.name} />;
					})} */}
			{poks &&
				(!types
					? poks.map((pok) => {
							if (searchTerm) {
								if (pok.name.includes(searchTerm.toLowerCase())) {
									return <PokemonArticle key={uuidv4()} name={pok.name} />;
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
		</div>
	);
};

export default PokemonList;
