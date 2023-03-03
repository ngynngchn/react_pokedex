//component import
import Types from "../type/Types";

//CSS import
import "./Details.css";

const Details = (props) => {

	/* Die id ist eine Numme, welche in ein String umgewandelt wird. Mit padStart sagen wird wieviele Ziffern wir angezeigt bekommen möchten und womit es aufgefüllt werden soll */
	let id = props.pokemon.id.toString();
	id = id.padStart(3,0);

	return (
		<article id="pokemonDetail">
			<div className="imgBackground"></div>
				<img src={props.pokemon.sprites.other.dream_world.front_default} alt={props.pokemon.name} />
			{/* Der Pokedex Eintrag wird hier angezeigt und der erste Buchstabe vom Namen soll großgeschrieben sein */}
			<h1>#{id} {(props.pokemon.name).charAt(0).toUpperCase()+(props.pokemon.name).slice(1)}</h1>
			<Types />
			<h3>Attack & Movements</h3>
		</article>
	);
};

export default Details;
