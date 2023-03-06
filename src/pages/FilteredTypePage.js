//component import
import Navigation from "../components/navigation/Navigation";
import PokemonList from "../components/pokemonlist/PokemonList";
// import Types from "../components/type/Types";

// library import
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Types from "../components/type/Types";

const FilteredTypePage = () => {
	const [filtered, setFilter] = useState("");
	const [searchTerm, setSearchTerm] = useState("");

	const location = useLocation();
	const selected = location.state;

	function searchPokemon(event) {
		setSearchTerm(event.target.value);
	}
	console.log("selected", selected && selected[1]);
	useEffect(() => {
		if (selected) {
			fetch(`https://pokeapi.co/api/v2/type/${selected[0]}`)
				.then((response) => response.json())
				// Remove unused useEffect() block

				.then((data) => setFilter(data.pokemon));
		}
	}, [selected]);

	return (
		<section>
			<Navigation
				handleChange={searchPokemon}
				handleClick={() => setFilter(true)}
			/>

			<div className="container">
				{selected &&
					selected.map((type, index) => <Types typeName={type} key={index} />)}
			</div>

			{filtered && (
				<PokemonList
					searchTerm={searchTerm}
					data={filtered}
					types
					secondFilter={selected[1]}
				/>
			)}
		</section>
	);
};

export default FilteredTypePage;
