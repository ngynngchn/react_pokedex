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
	let menu = props.menu;

	/* Für den Darkmode */
	const [isActive, setActive] = useState(false);


	const handleToggle = () => {
		let allPokmenArticle = document.querySelectorAll(".pokemonArticle");

		if (isActive){
			document.querySelector("body").classList.add("lightBackground");
			document.querySelector("body").classList.remove("darkBackground");
/* 			document.querySelector(".imgBackground").classList.remove("darkImgBackground"); */
			
			for (let i = 0; i < allPokmenArticle.length; i++) {
			allPokmenArticle[i].classList.remove("darkArticle");
			}
		}else{
			document.querySelector("body").classList.add("darkBackground");
			document.querySelector("body").classList.remove("lightBackground");
/* 			document.querySelector(".imgBackground").classList.add("darkImgBackground"); */

			for (let i = 0; i < allPokmenArticle.length; i++) {
				allPokmenArticle[i].classList.add("darkArticle");
				}
		}

		setActive(!isActive);
	}

	return (
		<nav>
			{menu ? (
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
			<button className="darkmodeBtn" onClick={handleToggle}></button>
			{/* Darkmode react nachschauen */}
		</nav>
	);
};

export default Navigation;
