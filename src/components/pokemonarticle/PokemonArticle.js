//library import
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// CSS import
import "./PokemonArticle.css";

const PokemonArticle = ({ name }) => {
	const [pokemon, setPokemon] = useState();

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((response) => response.json())
			.then((data) => {
				setPokemon(data);
			});
	}, [name]);

	/* conditional rendering */
	if (pokemon) {
		let pokemonImg = pokemon.sprites.other.dream_world.front_default;

		let id = pokemon.id.toString();
		id = id.padStart(3, 0);

		let pokemonName = (pokemon.name).charAt(0).toUpperCase()+(pokemon.name).slice(1);

		return (
			<article className="pokemonArticle">
				{pokemon && (
					<Link to={`${pokemon.name}`}>
						<img src={pokemonImg} alt={pokemonName}/>
						<div>
							<p>#{id}</p>
							<p>{pokemonName}</p>
						</div>
					</Link>
				)}
			</article>
		);
	}
};

export default PokemonArticle;
