import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const MarkAttendance = () => {
	const [currentLatitude, setCurrentLatitude] = useState("");
	const [currentLongitude, setCurrentLongitude] = useState("");
	const [feedback, setFeedback] = useState("");
	const [isChecked, setIsChecked] = useState(false);
	const navigate = useNavigate();

	const getCurrentDateTime = () => {
		const now = new Date();
		return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
	};

	const loadLocation = async () => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				function (position) {
					setCurrentLatitude(position.coords.latitude);
					setCurrentLongitude(position.coords.longitude);
				},
				function (error) {
					return toast.error(
						"Error getting location:",
						error.message
					);
				}
			);
		} else {
			return toast.error("Geolocation is not supported by this browser.");
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!isChecked) {
			return toast.error(
				"Please confirm attendance by checking the box."
			);
		}

		const response = await fetch(
			"http://localhost:1324/api/attendance/mark-attendance",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					currentLatitude,
					currentLongitude,
					feedback,
				}),
				credentials: "include",
			}
		);
		const data = await response.json();

		if (data.success) {
			toast.success("Your attendance has been marked");
			navigate("/dashboard");
		} else {
			toast.error(data.message);
			setTimeout(() => {
				navigate("/dashboard");
			}, 2000);
		}
	};

	return (
		<div className="container mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
			<Toaster />
			<h1 className="text-3xl font-semibold mb-6 text-center">
				Mark Attendance
			</h1>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div className="flex flex-col justify-between">
					<div>
						<p className="mb-2">
							Current Date and Time: {getCurrentDateTime()}
						</p>
						<div className="flex items-center mb-2">
							<p className="mr-2">Your Location:</p>
							<p className="text-green-600">
								{currentLatitude && currentLongitude
									? `${currentLatitude}, ${currentLongitude}`
									: "Location not loaded"}
							</p>
							<button
								className="ml-2 bg-yellow-400 px-2 py-1 rounded-md text-white hover:bg-yellow-500 transition-colors flex items-center"
								onClick={loadLocation}
							>
								<svg
									fill="#000000"
									width="22px"
									height="22px"
									viewBox="0 0 24 24"
									id="download"
									data-name="Line Color"
									xmlns="http://www.w3.org/2000/svg"
									className="icon line-color"
								>
									<path
										id="secondary"
										d="M20,17v3a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V17"
										style={{
											fill: "none",
											stroke: "rgb(0,0,0~)",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
										}}
									/>
									<path
										id="primary"
										d="M5.65,10.56,7,9a1,1,0,0,1,1.41-.11L10,10.34V3h4v7.34l1.64-1.41A1,1,0,0,1,17.05,9l1.3,1.52A1,1,0,0,1,18.24,12l-5.59,4.79a1,1,0,0,1-1.3,0L5.76,12A1,1,0,0,1,5.65,10.56Z"
										style={{
											fill: "none",
											stroke: "rgb(0, 0, 0)",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
										}}
									/>
								</svg>
							</button>
						</div>
						<textarea
							value={feedback}
							onChange={(e) => setFeedback(e.target.value)}
							className="w-full border py-2 px-4 resize-none"
							placeholder="Feedback...."
							rows="6"
						></textarea>
					</div>
					<div className="mt-4 flex items-center">
						<input
							type="checkbox"
							checked={isChecked}
							onChange={() => setIsChecked(!isChecked)}
							id="attendance-checkbox"
							className="mr-2 cursor-pointer"
						/>
						<label htmlFor="attendance-checkbox">
							I Confirmed that once the attendance is marked,
							anyone cannnot update it.
						</label>
					</div>
				</div>
			</div>
			<div className="text-center mt-6">
				<button
					className={`bg-red-400 px-6 py-3 border-[1px] border-transparent rounded-lg ${
						currentLatitude === "" ||
						currentLongitude === "" ||
						!isChecked
							? "opacity-50 cursor-not-allowed"
							: "hover:bg-transparent hover:border-red-400"
					}`}
					onClick={handleSubmit}
					disabled={
						currentLatitude === "" ||
						currentLongitude === "" ||
						!isChecked
					}
				>
					Mark Attendance
				</button>
			</div>
		</div>
	);
};

export default MarkAttendance;
