import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard.jsx";
import NavbarHome from "../components/NavbarHome.jsx";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../components/Loader.jsx";
import { setEventsToLocalStorage } from "../redux/eventSlice.js";
import { useDispatch } from "react-redux";

const Event = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [eventData, setEventData] = useState([]);

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const response = await fetch(
					"http://localhost:1324/api/event/get-all-events"
				);
				const data = await response.json();

				if (data.success) {
					setEventData(data.eventData);
					dispatch(setEventsToLocalStorage(data.eventData));
				} else {
					toast.error(data.message);
				}
			} catch (error) {
				console.error("Error fetching events:", error);
				toast.error("An error occurred while fetching events.");
			} finally {
				setIsLoading(false);
			}
		};

		fetchEvents();
	}, []);

	return (
		<div className="bg-[#050505] min-h-screen bg-center bg-cover">
			<Toaster />
			{isLoading && <Loader />}
			<div className="absolute z-10 mx-4 sm:mx-7 my-6 w-[95%]">
				<NavbarHome />
			</div>
			<section className="w-full absolute top-52 text-center">
				<h3 className="gradient-underline-text section-heading">
					EVENTS
				</h3>
			</section>
			<section className="flex items-center flex-col gap-12 justify-center w-full absolute top-[40vh] sm:top-[60vh] text-center overflow-hidden">
				<div className="flex overflow-hidden px-28 mb-20 sm:mb-32 items-center justify-center gap-16 flex-wrap">
					{eventData.map((event) => {
						return (
							<EventCard
								key={event._id}
								title={event.eventName}
								imageUrl={event.thumbnail}
								eventDescription={event.eventDescription}
								eventId={event._id}
							/>
						);
					})}
				</div>
			</section>
		</div>
	);
};

export default Event;
