//file import
// Component import
import PokemonArticle from "../pokemonarticle/PokemonArticle";

//Import npm
import { v4 as uuidv4 } from 'uuid';

//library imports
import { useState, useEffect } from "react"


// CSS import
import "./PokemonList.css";


const PokemonList = () => {

	const [ poks, setPoks] = useState()

	useEffect (() => {
		fetch("https://pokeapi.co/api/v2/pokemon")
		.then (response => response.json())
		.then (data => {
			console.log(data)
			setPoks (data)
		})
	}, []
	);

/* console.log(poks.results) */


	return (
		<>
			{poks && poks.results.map((pok) => {
				return (
				<PokemonArticle 
				key= {uuidv4()}
				/>
				)
			}
			)}
		</>
	);
};

/* Pokemonlist = (props) => {
	return (
		<div>
		{props.poks.map} ((pok) => {

		}
		)

	)
}

*/

export default PokemonList;

/* hier der fetch, der an Pokemon Article übergeben werden soll */
