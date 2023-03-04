//file import
// Component import
import PokemonArticle from "../pokemonarticle/PokemonArticle";

//Import npm
import { v4 as uuidv4 } from "uuid";

//library imports
// import { useState, useEffect } from "react";

// CSS import
import "./PokemonList.css";

const PokemonList = ({ searchTerm, data, types, secondFilter }) => {
	// const [poks, setPoks] = useState([]);

	// useEffect(() => {
	// 	fetch("https://pokeapi.co/api/v2/pokemon")
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setPoks(data);
	// 		});
	// }, []);

	// console.log("filtered:", pokemonfilter);

	// useEffect(() => {
	// 	fetch(`https://pokeapi.co/api/v2/pokemon?limit=150&offset=0}`)
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setPoks(data.results);
	// 		});
	// }, []);
	console.log(searchTerm);

	return (
		<div className="pokemonList">
			{/* {poks &&
				poks.results.map((pok) => {
					return <PokemonArticle key={uuidv4()} name={pok.name} />;
				})} */}

			{!types
				? data.map((pok) => {
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
				  })}
		</div>
	);
};

export default PokemonList;

/* hier der fetch, der an Pokemon Article übergeben werden soll */
