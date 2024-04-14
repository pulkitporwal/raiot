import React, { useEffect } from "react";
import EventCard from "../components/EventCard.jsx";
import NavbarHome from "../components/NavbarHome.jsx";



const Event = () => {
    let eventList;

    useEffect(() => {
       
    
    }, [])
    

	return (
		<div className="bg-[#050505] h-[230vh] sm:h-[450vh] bg-center bg-cover">
			<div className="absolute z-10 mx-4 sm:mx-7 my-6 w-[95%]">
				<NavbarHome />
			</div>

			<section className="w-full absolute top-52 text-center">
				<h3 className="gradient-underline-text section-heading">
					EVENTS
				</h3>
			</section>
			<section className="flex items-center flex-col gap-12 justify-center w-full absolute top-[40vh] sm:top-[60vh] text-center">
				
			</section>
			<div className="gradient-hr absolute w-[99.99%] mt-14 top-[223vh] sm:top-[430vh]"></div>

			
		</div>
	);
};

export default Event;
