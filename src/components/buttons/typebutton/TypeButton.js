// CSS import
import "./TypeButton.css";

const TypeButton = ({ name, color, onClick }) => {
	return (
		<button
			className="typeButton"
			value={name.toLowerCase()}
			style={{ backgroundColor: color }}
			onClick={onClick}>
			{name}
		</button>
	);
};

export default TypeButton;
