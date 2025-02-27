import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Components/Home";
import Country from "./Components/Country";
import Header from "./Components/Header";
import Error from "./Components/Error";
import './App.css'

const router = (
	<Routes>
		<Route
			path="/"
			element={
				<div>
					<Header />
					<Home />
				</div>
			}
		/>
		<Route
			path="/:country"
			element={
				<div>
					<Header />
					<button
						id="back-btn"
						onClick={() => {
							history.back();
						}}>
						<i className="fa-solid fa-left-long"></i>
					</button>
					<Country />
				</div>
			}
		/>
		<Route path="/error" element={<Error />} />
	</Routes>
);

function App() {
debugger
  return (
	  <div>
		  <BrowserRouter>{router}</BrowserRouter>
		</div>
	);
}

export default App
