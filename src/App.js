//Library import
import { BrowserRouter, Routes, Route } from "react-router-dom";

//CSS import
import "./App.css";

//Pages import
import Home from "./pages/Home.js";
import DetailsPage from "./pages/DetailsPage.js";
import FilteredTypePage from "./pages/FilteredTypePage.js";

//component import
import Header from "./components/header/Header";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:pokemon" element={<DetailsPage />} />

					<Route path="/type" element={<FilteredTypePage />} />
					<Route path="/type/:pokemon" element={<DetailsPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
