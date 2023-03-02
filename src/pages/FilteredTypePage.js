//component import
import Navigation from "../components/navigation/Navigation";
import PokemonList from "../components/pokemonlist/PokemonList";
import Types from "../components/type/Types";

const FilteredTypePage = () => {
	return (
		<section>
			<Navigation />
			<Types />
			<PokemonList />
		</section>
	);
};

export default FilteredTypePage;
