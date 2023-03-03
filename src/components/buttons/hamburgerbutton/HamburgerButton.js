// CSS import
import "./HamburgerButton.css";

// Image import
import menuIcon from "../../../images/menu.svg";

const HamburgerButton = (props) => {
	return (
		<input type="image" src={menuIcon} alt="menu" onClick={props.handleclick} />
	);
};

export default HamburgerButton;
