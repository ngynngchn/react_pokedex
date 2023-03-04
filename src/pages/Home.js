// Component import
import Navigation from "../components/navigation/Navigation";
import PokemonList from "../components/pokemonlist/PokemonList";

// Library import
import { useState } from "react";
import { useEffect } from "react";

// import von Pokeminfilter hier, da es von überall zugreifbar sein sollte
import PokemonFilter from "../components/pokemonfilter/PokemonFilter";

const Home = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filter, setFilter] = useState(false);
	const [poks, setPoks] = useState([]);

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon?limit=150&offset=0}`)
			.then((response) => response.json())
			.then((data) => {
				setPoks(data.results);
			});
	}, []);

	function searchPokemon(event) {
		setSearchTerm(event.target.value);
	}
	console.log(searchTerm);

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
			{poks && <PokemonList searchTerm={searchTerm} data={poks} />}
		</main>
	);
};

export default Home;
