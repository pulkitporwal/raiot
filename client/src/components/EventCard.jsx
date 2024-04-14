import React from "react";
import sample from "../assets/sample.jpg";
import { Link } from "react-router-dom";

const EventCard = ({ title, imageUrl, eventDescription, eventLink }) => {
	return (
		<div className="px-4 py-5 main-card overflow-hidden rounded-lg relative group bg-[#101010] w-[200px] h-[300px]">
			<img
				src={imageUrl}
				className="absolute top-0 left-0 w-[200px] h-[300px] object-cover"
				alt="png"
			/>
			<div className="absolute bottom-0 left-0 group-hover:bg-black opacity-35 group-hover:opacity-80 transition-all ease-linear w-[200px] h-[300px] z-10 "></div>
			<div className="transition-all ease-linear duration-300 z-[12] bottom-5 group-hover:bottom-[230px] absolute text-2xl text-white">
			{title}
			</div>
			<p className="transition-all ease-linear duration-300 z-[12] absolute bottom-[-500px] group-hover:bottom-20 text-sm text-white">
			{eventDescription}
			</p>
			<Link className="w-[90px] h-[30px] hover:bg-transparent border-red-500 border transition-all ease-linear duration-[450ms] z-[12] absolute bottom-6 left-[-500px] group-hover:left-6 text-sm text-white bg-red-600 rounded-md px-2 py-1 ">
				Learn More
			</Link>
		</div>
	);
};

export default EventCard;
