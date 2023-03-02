// CSS import
import "./Navigation.css";

// Componen import
import HamburgerButton from "../buttons/hamburgerbutton/HamburgerButton";
import BackButton from "../buttons/backbutton/BackButton";

const Navigation = () => {
	let home = false;

	return (
		<nav>
			{home ? <HamburgerButton /> : <BackButton />}
			<label htmlFor="search" hidden>
				Search Pokemon
			</label>
			<input
				type="search"
				name="search"
				id="search"
				placeholder="Search Pokemon"
			/>
			<input type="image" src="#" alt="dark/light mode" />
			{/* Darkmode react nachschauen */}
		</nav>
	);
};

export default Navigation;
