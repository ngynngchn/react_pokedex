//file import

//components import
import Header from "../header/Header";
import TypeButton from "../buttons/typebutton/TypeButton";

// CSS import
import "./PokemonFilter.css";

const PokemonFilter = () => {
	return (
		<>
			<section>
				<Header />
				<div className="closeButton"></div>
				<h2>Types</h2>
				<TypeButton />
				<button className="searchButton">Search</button>
			</section>
		</>
	);
};

export default PokemonFilter;

/* button onClick funktion */
