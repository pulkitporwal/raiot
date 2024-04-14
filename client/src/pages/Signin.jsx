import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import logo from "../assets/logo2.png";
import { signinStart, signinSuccess, signinFail } from "../redux/userSlice.js";
import toast, { Toaster } from "react-hot-toast";

const Signin = () => {
	const information = useSelector((state) => state.user) || null;
	const [rememberMe, setRememberMe] = useState(false);
	const [formData, setFormData] = useState({
		userNameOrEmail: "",
		password: "",
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	useEffect(() => {
		if (information.userInfo) {
			navigate("/dashboard");
		}
	}, [information.userInfo]);

	useEffect(() => {
		const fetchCookie = async () => {
			const response = await fetch("http://localhost:1324/api/auth/test");
			const data = await response.json();
			console.log(data);
		};
	}, []);

	const handleSubmit = async (event) => {
		event.preventDefault();
		dispatch(signinStart());

		try {
			const response = await fetch(
				"http://localhost:1324/api/auth/signin",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
					credentials: "include",
				}
			);
			const data = await response.json();
			console.log(data);

			if (data.success) {
				toast.success(data.message);
				setTimeout(() => {
					dispatch(signinSuccess(data.userInfo)); 
					navigate("/dashboard");
				}, 500);
			} else {
				dispatch(signinFail(data.error)); 
				toast.error(data.message); 
			}
		} catch (error) {
			console.error("Error submitting data:", error);
			dispatch(signinFail(error.message));
			toast.error("An error occurred while signing in."); 
		}
	};

	return (
		<div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
			{information.loading && <Loader />}{" "}
		
			<Toaster />
			<div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
				<div className="p-4 py-6 text-white bg-gray-900 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
					<div className="flex items-center justify-center my-3 text-4xl font-bold tracking-wider text-center">
						<Link to={"/"}>
							<img
								src={logo}
								alt="logo"
								className="w-20 bg-white rounded-full"
							/>
						</Link>
					</div>
					<p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
						Student powered Robotics Automation & Internet of Things
						Club
					</p>
					<p className="flex flex-col items-center justify-center mt-10 text-center">
						<span>Don't have an account?</span>
						<Link to={"/signup"} className="underline">
							Get Started!
						</Link>
					</p>
					<p className="mt-6 text-sm text-center text-gray-300">
						Read our{" "}
						<Link to={"/terms"} className="underline">
							terms
						</Link>{" "}
						and{" "}
						<Link to={"/conditions"} className="underline">
							conditions
						</Link>
					</p>
				</div>
				<div className="p-5 bg-white md:flex-1">
					<h3 className="my-4 text-2xl font-semibold text-gray-700">
						Account Login
					</h3>
					<form
						onSubmit={handleSubmit}
						className="flex flex-col space-y-5"
					>
						<div className="flex flex-col space-y-1">
							<label
								htmlFor="email"
								className="text-sm font-semibold text-gray-500"
							>
								Email address or Username
							</label>
							<input
								type="text"
								id="userNameOrEmail"
								autoFocus
								value={formData.userNameOrEmail}
								onChange={handleChange}
								className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-gray-900"
							/>
						</div>
						<div className="flex flex-col space-y-1">
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="text-sm font-semibold text-gray-500"
								>
									Password
								</label>
								
							</div>
							<input
								type="password"
								id="password"
								value={formData.password}
								onChange={handleChange}
								className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-gray-900"
							/>
						</div>
						<div className="flex items-center space-x-2">
							<input
								type="checkbox"
								id="remember"
								checked={rememberMe}
								onChange={(e) =>
									setRememberMe(e.target.checked)
								}
								className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-gray-900"
							/>
							<label
								htmlFor="remember"
								className="text-sm font-semibold text-gray-500"
							>
								Remember me
							</label>
						</div>
						<div>
							<button
								type="submit"
								className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-gray-900 rounded-md shadow hover:bg-transparent hover:text-black border-[0.5px] hover:border-black focus:outline-none focus:ring-gray-900 focus:ring-4"
							>
								Sign in
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signin;
