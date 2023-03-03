//file import
import { types } from "../data/data.js";

//components import
import Header from "../header/Header";
import TypeButton from "../buttons/typebutton/TypeButton";

// CSS import
import "./PokemonFilter.css";

// Image import
import closeButton from "../../images/close.svg";

const PokemonFilter = () => {
	console.log(types);

	return (
		<>
			<section className="pokemonFilter">
				<div className="nav">
					<Header />
					<input type="image" src={closeButton} alt="close" />
				</div>
				<h2>TYPE</h2>
				{/* hier iterieren wir durch unser types - array um die einzelnen Types darzustellen */}
				<article>
					{types.map((type, index) => {
						return (
							<TypeButton name={type.type} color={type.color} key={index} />
						);
					})}
				</article>

				<button className="searchButton">Search</button>
			</section>
		</>
	);
};

export default PokemonFilter;

/* button onClick funktion */
