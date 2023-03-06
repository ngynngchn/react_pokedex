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
	const [maximum, setMax] = useState(false);

	function handleClickevent(event) {
		const value = event.target.value;
		if (selected.length < 2 || selected.includes(value)) {
			setMax(false);
			if (selected.includes(value)) {
				// Auswahl wird auf zwei types beschränkt - unser Array selected hat ein maximum von 2; sobald das überschritten wird oder unser Array den Wert schon besitzt, soll selected aktualisiert werden
				setSelected(selected.filter((item) => item !== value));
				event.target.style.borderColor = "transparent";
				event.target.style.boxShadow = "";
			} else {
				// sonst wird der wert hinzugefügt
				setSelected([...selected, value]);
				event.target.style.borderColor = " #2c72b8";
				event.target.style.boxShadow = " 0 0 10px #2c72b8";
				if (selected.length === 1) {
					// Set max to true nach dem 2.Klick
					setSelected([...selected, value]);
					setMax(true);
				}
			}
		} else {
			setMax(true);
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
				<p>You want a pokemon with the selected types (max. 2): </p>
				<article>
					{types.map((type, index) => {
						return (
							<TypeButton
								name={type.type}
								color={
									maximum && !selected.includes(type.type.toLowerCase())
										? "grey"
										: type.color
								}
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
