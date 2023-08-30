import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
	return (
		<nav className="flex  bg-slate-50 z-50 w-screen h-fit pb-4 border border-gray-100 shadow-lg justify-between" >
			<Link to="/">
				<h1 className="font-light md:ml-12 text-black md:text-4xl text-3xl ">Shopping Area</h1>
			</Link>

			<Link to="/cart">
				<div className="md:mr-12 relative w-12 h-12 mr-4 " >
					<AiOutlineShoppingCart className="text-5xl inline-block " /><span className=" border border-black  absolute bottom-0 rounded-full w-5 bg-black text-white text-center h-6 " >3</span>
				</div>
			</Link>
		</nav>
	);
};

export default Navbar;
