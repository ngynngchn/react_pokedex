//file import
import data from "../data/data.js";

//components import
import Header from "../header/Header";
import TypeButton from "../buttons/typebutton/TypeButton";

// CSS import
import "./PokemonFilter.css";

// Image import
import closeButton from "../../images/close.svg";

const PokemonFilter = () => {
	return (
		<>
			<section className="PokemonFilter">
				<div className="nav">
					<Header />
					<input type="image" src={closeButton} alt="close" />
				</div>
				<h2>TYPE</h2>
				<TypeButton name="GRASS" />{" "}
				{/* grass ist hier vorerst der platzhalter zum übergeben */}
				<button className="searchButton">Search</button>
			</section>
		</>
	);
};

export default PokemonFilter;

/* button onClick funktion */
