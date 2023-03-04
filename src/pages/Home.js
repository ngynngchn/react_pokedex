// Component import
import Navigation from "../components/navigation/Navigation";
import PokemonList from "../components/pokemonlist/PokemonList";

// Library import
import { useState } from "react";

import PokemonFilter from "../components/pokemonfilter/PokemonFilter";

const Home = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filter, setFilter] = useState(false);

	function searchPokemon(event) {
		setSearchTerm(event.target.value);
	}

	return (
		<main className="Home">
			{filter ? (
				<PokemonFilter
					handleClick={() => {
						setFilter(false);
					}}
				/>
			) : (
				""
			)}
			<Navigation
				menu
				handleChange={searchPokemon}
				handleClick={() => setFilter(true)}
			/>
			{/* searchTerm um später dann die Pokemonliste nach dem Pokemon zu filtern
			 */}
			<PokemonList searchTerm={searchTerm} />
		</main>
	);
};

export default Home;
