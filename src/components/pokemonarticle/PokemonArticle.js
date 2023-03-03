//library import
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// CSS import
import "./PokemonArticle.css";

const PokemonArticle = ({ name }) => {
	const [pokemon, setPokemon] = useState();

	useEffect(() => {
		/* Richtiger fetch muss noch gemacht werden  */
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((response) => response.json())
			.then((data) => {
				setPokemon(data);
			});
	}, []);
	/* conditional rendering */
	if (pokemon) {
		let pokemonImg = pokemon.sprites.other.dream_world.front_default;

		let id = pokemon.id.toString();
		id = id.padStart(3, 0);
		return (
			<article className="pokemonArticle">
				{pokemon && (
					<Link to={`${pokemon.name}`} data={pokemon}>
						<img src={pokemonImg} alt={pokemon.name} width="40%" />
						<div>
							<p>#{id}</p>
							<p>{pokemon.name}</p>
						</div>
					</Link>
				)}
			</article>
		);
	}
};

export default PokemonArticle;
