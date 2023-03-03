//library import
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

//components import
import Details from "../components/details/Details";
import Navigation from "../components/navigation/Navigation";

const DetailsPage = () => {
	/* hier wird mit params die id, die von der pokemonlist vom Nutzer ausgewählt wurde übernommen und an die Detailspage übergeben. Der Zweite fetch zeigt in der Detailspage das vom Nutzer ausgewählte Pokemon*/

	const params = useParams();

	const [pokemon,setPokemon] = useState();

	useEffect(() => {
		/* Richtiger fetch muss noch gemacht werden  */
		fetch(`https://pokeapi.co/api/v2/pokemon/1`)
		.then(response => response.json())
		.then(data => {
			setPokemon(data)
		})
	}, []);

	return (
	<main>
		<Navigation/>
		{pokemon? <Details pokemon ={pokemon}/>:<p>Loading</p>}
	</main>
	);
}

export default DetailsPage;

/*  useParams um dann den namen oder id von dem pokemon zu bokemmen für den zweiten fetch hier*/
