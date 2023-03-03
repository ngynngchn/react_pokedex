// CSS import
import "./BackButton.css";

// Image import
import backIcon from "../../../images/back.svg";

// Library Import
import { useNavigate } from "react-router-dom";

const BackButton = (props) => {
	let navigate = useNavigate();

	return (
		<input
			type="image"
			src={backIcon}
			alt="back"
			onClick={() => {
				navigate(-1);
			}}
		/>
	);
};

export default BackButton;
