import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Dashboard = () => {
	let currentLatitude = "";
	let currentLongitude = "";
	const [feedback, setFeedback] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				function (position) {
					currentLatitude = position.coords.latitude;
					currentLongitude = position.coords.longitude;

					console.log("Latitude:", currentLatitude);
					console.log("Longitude:", currentLongitude);
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

		const response = await fetch(
			"http://127.0.0.1:1324/api/attendance/mark-attendance",
			{
				method: "POST",
				headers: {
					"Content-Type": "applicatoin/json",
				},
				body: JSON.stringify({
					currentLatitude,
					currentLongitude,
					feedback,
				}),
			}
		);
    const data = await response.json();

    console.log(data)

	if(data.success){
		toast.success("Your attendace has been marked");
	}
	if(!data.success){
		toast.error(data.message);
	}


	};
	return (
		<div>
			<Toaster />
			<textarea
				value={feedback}
				onChange={(e) => setFeedback(e.target.value)}
				className="mt-5 mx-10 border py-2 px-4"
				placeholder="Feedback...."
				cols="30"
				rows="10"
			></textarea>
			<button
				className="bg-red-400 px-4 py-2 border-[1px] transition-all border-transparent hover:bg-transparent hover:border-red-400"
				onClick={handleSubmit}
			>
				Mark Attendance
			</button>
		</div>
	);
};

export default Dashboard;
