import React from "react";
import sample from "../assets/sample.jpg";
import { Link, useNavigate } from "react-router-dom";

const EventCard = ({ title, imageUrl, eventDescription, eventId }) => {
    const navigate = useNavigate();

    return (
        <div className="py-5 main-card overflow-hidden rounded-lg relative group bg-[#101010] w-[250px] h-[350px]">
            <img
                src={imageUrl}
                className="absolute top-0 left-0 w-[250px] h-[350px] object-cover"
                alt="png"
            />
            <div className="absolute bottom-0 left-0 group-hover:bg-black opacity-35 group-hover:opacity-80 transition-all ease-linear w-[250px] h-[350px] z-10 "></div>
            <div className="px-4 transition-all ease-linear duration-300 z-[12] bottom-10 group-hover:bottom-[230px] absolute text-2xl text-white">
                {title}
            </div>
            <p className="px-4 transition-all ease-linear duration-[800ms] z-[12] absolute bottom-[-500px] group-hover:bottom-[80px] text-left text-sm text-white w-[220px] overflow-hidden">
                {eventDescription}
            </p>
            <button
                className="w-[110px] h-[30px] hover:bg-transparent border-red-500 border transition-all ease-linear duration-[450ms] z-[12] absolute bottom-6 left-[-500px] group-hover:left-6 text-sm text-white bg-red-600 rounded-md px-2 py-1 "
                onClick={() => navigate(`/event/${eventId}`)}
            >
                Learn More
            </button>
        </div>
    );
};

export default EventCard;
