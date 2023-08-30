import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
const App = () => {
	return (
		<main>
			<section className="sticky top-0">
				<Navbar />
			</section>
			<Routes>
				<Route path="/cart:id" Component={Cart} />
				<Route path="/cart" Component={Cart} />
				<Route path="/not-found" Component={NotFound} />
				<Route path="/" exact Component={Home} />
				<Route path="*" element={<Navigate to="/not-found" replace />} />
			</Routes>
		</main>
	);
};

export default App;
