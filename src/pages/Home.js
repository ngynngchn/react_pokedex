// Component import
import Navigation from "../components/navigation/Navigation";
import PokemonList from "../components/pokemonlist/PokemonList";

const Home = () => {
	return (
		<main className="Home">
			<Navigation home />
			<PokemonList />
		</main>
	);
};

export default Home;
