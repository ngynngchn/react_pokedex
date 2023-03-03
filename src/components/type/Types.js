//file import
import {types} from "../data/data.js";

// CSS import
import "./Types.css";

const Types = (props) => {
	let typeName = props.typeName.toUpperCase();
	let color = types.find((type)=>{
		return type.type === typeName
	})
	
	console.log(color)

	return (
		<h4 style={{backgroundColor: color.color }}>{typeName}</h4>
	);
};

export default Types;
