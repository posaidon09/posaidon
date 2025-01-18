import "./App.css";
import { useContext } from "react";
import Root from "./pages/Root.jsx";
import { context } from "./lib/Context.jsx";
import Topbar from "./components/Topbar.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
	const { page } = useContext(context);
	function getPage() {
		const pages = [<Root />, <Projects />, <Contact />];
		return pages[page];
	}
	return (
		<div className="bg-gradient-to-br bg-black from-black from-30% to-purple-950/40 to-90% overflow-auto">
			<Topbar />
			{getPage()}
		</div>
	);
}

export default App;
