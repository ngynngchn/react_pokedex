//file import
// Component import
import PokemonArticle from "../pokemonarticle/PokemonArticle";

// CSS import
import "./PokemonList.css";

const PokemonList = () => {
	return (
		<>
			<PokemonArticle />
			<PokemonArticle />
			<PokemonArticle />
		</>
	);
};

export default PokemonList;

/* hier der fetch, der an Pokemon Article übergeben werden soll */
