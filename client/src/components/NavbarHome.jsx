import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

const NavbarHome = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-[#c5c5c5] rounded-2xl z-10 px-5 py-3 md:px-10">
			<div className="container flex justify-between items-center">
				<Link to="/" className="flex items-center w-52">
					<div className="bg-white rounded-full">
						<img src={logo} alt="RAIoT" className="w-[3.9rem]" />
					</div>
					<h4 className="text-2xl ml-2 md:ml-5 tracking-widest">
						RAIoT
					</h4>
				</Link>
				<div className="md:flex hidden">
					<ul className="flex space-x-4 items-center justify-center">
						<li>
							<Link to="/" className="top-3 hover:text-pink-700">
								<pre> Home</pre>
							</Link>
						</li>
						<li>
							<Link
								to="/projects"
								className="top-3 hover:text-pink-700"
							>
								<pre>Projects  </pre>
							</Link>
						</li>
						<li>
							<Link
								to="/teams"
								className="top-3 hover:text-pink-700"
							>
								<pre>  Teams</pre>
							</Link>
						</li>
						<li>
							<Link
								to="/events"
								className="top-3 hover:text-pink-700"
							>
								<pre> Events</pre>
							</Link>
						</li>
						<li>
							<Link
								to="/faq"
								className="top-3 hover:text-pink-700"
							>
								<pre>  FAQ</pre>
							</Link>
						</li>
						<li>
							<Link
								to="/signup"
								className="top-3 hover:text-pink-700"
							>
								<pre>Register</pre>
							</Link>
						</li>
					</ul>
				</div>
				<div className="md:hidden">
					<button onClick={toggleMenu} className="">
						{isOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>
			{isOpen && (
				<div className="md:hidden">
					<ul className="flex flex-col mt-2 space-y-2">
						<li>
							<Link to="/" className="">
								Home
							</Link>
						</li>
						<li>
							<Link to="/projects" className="">
								Projects
							</Link>
						</li>
						<li>
							<Link to="/teams" className="">
								Team
							</Link>
						</li>
						<li>
							<Link to="/events" className="">
								Events
							</Link>
						</li>
						<li>
							<Link to="/faq" className="">
								FAQ
							</Link>
						</li>
						<li>
							<Link to="/signup" className="">
								Register
							</Link>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default NavbarHome;
