//file import
import {types} from "../data/data.js";

// CSS import
import "./Types.css";

const Types = (props) => {

	/* type aus dem map von den Detail soll verglichen werden mit dem Array aus data.js um dann die color zu dem jeweiligen type zu bekommen */

	let typeName = props.typeName.toUpperCase();
	let color = types.find((type)=>{
		return type.type === typeName
	})

	return (
		<h4 style={{backgroundColor: color.color }}>{typeName}</h4>
	);
};

export default Types;
