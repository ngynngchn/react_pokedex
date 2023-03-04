// CSS import
import "./Navigation.css";

// Componen import
import HamburgerButton from "../buttons/hamburgerbutton/HamburgerButton";
import BackButton from "../buttons/backbutton/BackButton";

// Image import
import mode from "../../images/mode.svg";

const Navigation = (props) => {
	let menu = props.menu;

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
			<input type="image" src={mode} alt="dark/light mode" />
			{/* Darkmode react nachschauen */}
		</nav>
	);
};

export default Navigation;
