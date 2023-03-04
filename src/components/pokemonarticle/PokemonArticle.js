//library import
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// CSS import
import "./PokemonArticle.css";

const PokemonArticle = ({ name, secondFilter }) => {
	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		/* Richtiger fetch muss noch gemacht werden  */
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
		id = id.padStart(3, "0");
		// wenn secondFilter existiert, soll im Pokemon Objekt nachgeschaut werden, ob eines der Types == secondFilter ist - > Rückgabewert ist boolean
		let type = pokemon.types.some((type) => type.type.name == secondFilter);

		console.log(secondFilter);

		return (
			<>
				{/* Abfrage, falls secondFilter existiert, soll weiter abgefragt werden ob type true ist um dann das Pokemon mit beiden Types anzuzeigen*/}
				{secondFilter ? (
					type && (
						<article className="pokemonArticle">
							<Link to={`${pokemon.name}`} data={pokemon}>
								<img src={pokemonImg} alt={pokemon.name} width="40%" />
								<div>
									<p>#{id}</p>
									<p>{pokemon.name}</p>
								</div>
							</Link>
						</article>
					)
				) : (
					// wenn secondFilter nicht existiert wird ganz normal das pokemon angezeigt
					<article className="pokemonArticle">
						<Link to={`${pokemon.name}`} data={pokemon}>
							<img src={pokemonImg} alt={pokemon.name} width="40%" />
							<div>
								<p>#{id}</p>
								<p>{pokemon.name}</p>
							</div>
						</Link>
					</article>
				)}
			</>

			// <article className="pokemonArticle">
			// 	{pokemon && (
			// 		<Link to={`${pokemon.name}`} data={pokemon}>
			// 			<img src={pokemonImg} alt={pokemon.name} width="40%" />
			// 			<div>
			// 				<p>#{id}</p>
			// 				<p>{pokemon.name}</p>
			// 				<p>{pokemon.types[1]?.type.name}</p>
			// 			</div>
			// 		</Link>
			// 	)}
			// </article>
		);
	}
};

export default PokemonArticle;
