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
	const [offset, setOffset] = useState(0);
	const [zwischenspeicher, setZP] = useState([]);

	/* 	for (let i = 0; i < 1279; i = i + 20) {
		setOffset(i);
	} */

	// function showMore() {
	// 	if (offset < 1279) {
	// 		setZP([...zwischenspeicher, ...poks]);
	// 		setOffset(offset + 20);
	// 	}
	// }

	function showMore() {
		if (offset < 1279) {
			fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset + 20}&limit=20`)
				.then((response) => response.json())
				.then((data) => {
					// setPoks([...poks, ...data.results]);
					setPoks((prevPoks) => [...prevPoks, ...data.results]);
					setOffset(offset + 20);
				});
		}
	}

	console.log("zwischenspeicher", zwischenspeicher);
	console.log(poks);

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`)
			.then((response) => response.json())
			.then((data) => {
				setPoks(data.results);
			});
	}, []);

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
			.then((response) => response.json())
			.then((data) => {
				setZP(data.results);
			});
	}, [offset]);

	console.log(poks);

	// useEffect(() => {
	// 	fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150")
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setPoks(data.results);
	// 		});
	// }, []);

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

			{}

			{!pokemonSearch && (
				<h5>Sorry we could not find the pokemon you are looking for :( </h5>
			)}

			<button onClick={showMore}>Load More</button>
		</div>
	);
};

export default PokemonList;
