//file import
import { types } from "../data/data.js";

//components import
import TypeButton from "../buttons/typebutton/TypeButton";

// CSS import
import "./PokemonFilter.css";

// Image import
import closeButton from "../../images/close.svg";
import logo from "../../images/logo.svg";

// Library import
import { useState } from "react";
import { Link } from "react-router-dom";

const PokemonFilter = (props) => {
	const [selected, setSelected] = useState([]);

	function handleClickevent(event) {
		const value = event.target.value;
		if (selected.length < 2 || selected.includes(value)) {
			if (selected.includes(value)) {
				// Auswahl wird auf zwei types beschränkt - unser Array selected hat ein maximum von 2; sobald das überschritten wird oder unser Array den Wert schon besitzt, soll es aussortiert werden
				setSelected(selected.filter((item) => item !== value));
				event.target.style.boxShadow = "none";
			} else {
				// sonst wird der wert hinzugefügt
				setSelected([...selected, value]);
				event.target.style.boxShadow =
					" rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
			}
		}
	}

	return (
		<>
			<section className="pokemonFilter">
				<div className="nav">
					<input type="image" src={logo} alt="logo" />
					<input
						type="image"
						src={closeButton}
						alt="close"
						onClick={props.handleClick}
					/>
				</div>
				<h2>TYPE</h2>
				{/* hier iterieren wir durch unser types - array um die einzelnen Types darzustellen */}
				<article>
					{types.map((type, index) => {
						return (
							<TypeButton
								name={type.type}
								color={type.color}
								key={index}
								onClick={handleClickevent}
							/>
						);
					})}
				</article>

				<Link className="searchButton" to="/type" state={selected}>
					SEARCH
				</Link>
			</section>
		</>
	);
};

export default PokemonFilter;

/* button onClick funktion */
