//Library import
import { Link } from "react-router-dom";

// CSS import
import "./Header.css";

import logo from "../../images/logo.svg";

const Header = () => {
	return (
		<header className="xyz">
			<Link to="/">
				<img src={logo} alt="logo" />
			</Link>
		</header>
	);
};

export default Header;
