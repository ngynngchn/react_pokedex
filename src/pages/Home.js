// Component import
import Navigation from "../components/navigation/Navigation";
import PokemonList from "../components/pokemonlist/PokemonList";

// Library import
import { useState } from "react";

// import von Pokeminfilter hier, da es von überall zugreifbar sein sollte
import PokemonFilter from "../components/pokemonfilter/PokemonFilter";

const Home = () => {
	const [searchTerm, setSearchTerm] = useState("");
	// funktion die dann an die PokemonList weitergegeben werden muss
	function searchPokemon(event) {
		setSearchTerm(event.target.value);
	}
	return (
		<main className="Home">
			<PokemonFilter />
			<Navigation home handleChange={searchPokemon} />
			{/* searchTerm um später dann die Pokemonliste nach dem Pokemon zu filtern
			 */}{" "}
			<PokemonList searchTerm={searchTerm} />
		</main>
	);
};

export default Home;
