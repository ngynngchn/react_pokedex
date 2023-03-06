/* //file import
import { types } from "../data/data.js"; */

//component import
import Types from "../type/Types";

//CSS import
import "./Details.css";

const Details = (props) => {
	/* Die id ist eine Numme, welche in ein String umgewandelt wird. Mit padStart sagen wird wieviele Ziffern wir angezeigt bekommen möchten und womit es aufgefüllt werden soll */
	let id = props.pokemon.id.toString();
	id = id.padStart(3, 0);

	/* Der Anfangsbuchstabe vom Pokemon soll groß geschrieben sein */
	let pokemonName =
		props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1);

	let pokemonImg = props.pokemon.sprites.other.dream_world.front_default
		? props.pokemon.sprites.other.dream_world.front_default
		: props.pokemon.sprites.other["official-artwork"].front_default;

	return (
		<article className="pokemonDetail">
			<div className="imgBackground">
				<img src={pokemonImg} alt={pokemonName} />
			</div>
			<h1>
				#{id} {pokemonName}
			</h1>
			<article className="pokemonType">
				{/* Hier werden die PokemonTypen(array) an die Komponente Type übergeben */}
				{props.pokemon.types.map((type, index) => {
					return <Types key={index} typeName={type.type.name} />;
				})}
			</article>
			<h3>Attack & Movements</h3>
		</article>
	);
};

export default Details;
