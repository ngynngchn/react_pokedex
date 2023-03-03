// CSS import
import "./TypeButton.css";

const TypeButton = ({ name, color }) => {
	return (
		<div>
			<input
				type="checkbox"
				name={name}
				id={name.toLowerCase()}
				onClick={() => {
					console.log("HERE");
				}}
			/>
			<label htmlFor={name} style={{ backgroundColor: color }}>
				{name}
			</label>
		</div>
	);
};

export default TypeButton;
