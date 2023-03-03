// CSS import
import "./TypeButton.css";

const TypeButton = ({ name, id }) => {
	return (
		<div>
			<label htmlFor={name} style={{ backgroundColor: "blue" }}>
				{name}
			</label>
			<input type="checkbox" name={name} id={id} />
		</div>
	);
};

export default TypeButton;
