import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import locationIcon from "../assets/location.png";
import dateIcon from "../assets/date.png";
import prizeIcon from "../assets/prize.png";
import backIcon from "../assets/back.png";

const EventInformation = () => {
	const { eventId } = useParams();
	const eventsFromLocalStorage = useSelector((state) => state.event) || null;

	const currentEvent = eventsFromLocalStorage.eventData.find(
		(event) => event._id === eventId
	);
	const eventExpiryDate = new Date(currentEvent.expireOn);

	console.log(currentEvent);

	return (
		<div className="text-white text-xl pb-24">
			<div className="fixed top-8 left-8">
				<Link to={"/events"}>
					<img
						src={backIcon}
						className="w-10 cursor-pointer"
						alt="back"
						onClick={() => {}}
					/>
				</Link>
			</div>
			<div>
				<img
					src={currentEvent.banner}
					className="w-full h-[500px] object-cover"
					alt="banner"
				/>
			</div>

			<div className="sm:px-52 px-10 mt-10">
				<div className="flex items-center justify-center mb-10">
					<h1 className="text-center gradient bg-clip-text text-transparent text-5xl font-extrabold hover:tracking-widest transition-all ease-linear duration-500 inline mx-auto">
						{currentEvent.eventName}
					</h1>
				</div>
				<div className="my-10 border-y-[1px] border-yellow-500 flex flex-wrap items-center justify-center gap-y-6 gap-x-16   py-5">
					<div className="flex items-center justify-between gap-2">
						<img className="w-[40px] " src={prizeIcon} alt="icon" />
						<p>{currentEvent.prize}</p>
					</div>
					<div className="flex items-center justify-between gap-2">
						<img className="w-[40px] " src={dateIcon} alt="icon" />
						<p>{eventExpiryDate.toLocaleDateString()}</p>
					</div>
					<div className="flex items-center justify-between gap-2">
						<img
							className="w-[40px] "
							src={locationIcon}
							alt="icon"
						/>
						<p>{currentEvent.location}</p>
					</div>
				</div>
				<div className="mt-5">
					<div className="flex items-center justify-center ">
						<h2 className="text-3xl border-b-[5px] pb-2 border-transparent hover:border-b-[5px] hover:border-white transition-all ease-linear duration-200 inline text-gray-300 font-bold text-center mb-2">
							Description
						</h2>
					</div>
					<p className="text-gray-400 text-center">
						{currentEvent.eventDescription}
					</p>

					<div className="flex items-center justify-center mt-10">
						<h2 className="text-3xl border-b-[5px] pb-2 border-transparent hover:border-b-[5px] hover:border-white transition-all ease-linear duration-200 inline text-gray-300 font-bold text-center mb-2">
							All Details
						</h2>
					</div>
					<p className="text-gray-400 text-center">
						{currentEvent.eventDetail}
					</p>
				</div>
				<div className="flex items-center justify-center sm:flex-row flex-col">
					<Link
						to={currentEvent.attachedDocument}
						className="button self-center w-[200px] mt-10"
					>
						Get Rule Book
					</Link>
					<Link
						to={"/signup"}
						className="button self-center w-[200px] mt-10"
					>
						Register Now
					</Link>
				</div>
			</div>
		</div>
	);
};

export default EventInformation;
