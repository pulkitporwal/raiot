import React from "react";
import homeIcon from "../assets/home.png";
import { Link } from "react-router-dom";

const Unauthorized = () => {
	return (
		<div className="h-[100vh] w-[100vw] flex flex-col text-white justify-center items-center ">
			<div className="h-full w-full flex flex-col text-white justify-center items-center">
				<h1 className="text-5xl font-bold sm:font-extrabold mb-10 text-center">You are Unauthorized to this Route</h1>
				<Link to="/" className=" flex gap-5 border hover:bg-pink-800 transition-all duration-500 ease-linear rounded-sm w-[160px] h-[70px] text-white justify-center items-center">
					<img src={homeIcon} alt="home" className="w-[40px] " />
					<p>Home</p>
				</Link>
			</div>
		</div>
	);
};

export default Unauthorized;
