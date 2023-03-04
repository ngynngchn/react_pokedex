//library import
import { useState } from "react";

// CSS import
import "./Navigation.css";

// Componen import
import HamburgerButton from "../buttons/hamburgerbutton/HamburgerButton";
import BackButton from "../buttons/backbutton/BackButton";

// Image import
import mode from "../../images/mode.svg";

const Navigation = (props) => {
	let home = props.home;

	/* Für den Darkmode */
	const [isActive, setActive] = useState(false);


	const handleToggle = () => {

		if (isActive){
			document.querySelector("body").classList.add("lightBackground");
			document.querySelector("body").classList.remove("darkBackground");
		}else{
			document.querySelector("body").classList.add("darkBackground");
			document.querySelector("body").classList.remove("lightBackground");
		}

		setActive(!isActive);
	}

	return (
		<nav>
			{home ? (
				<HamburgerButton handleClick={props.handleClick} />
			) : (
				<BackButton />
			)}
			<label htmlFor="search" hidden>
				Search Pokemon
			</label>
			<input
				type="search"
				name="search"
				id="search"
				placeholder="Search Pokemon"
				onChange={props.handleChange}
			/>
			<button onClick={handleToggle}>Dark/Lightmode</button>
			{/* Darkmode react nachschauen */}
		</nav>
	);
};

export default Navigation;
