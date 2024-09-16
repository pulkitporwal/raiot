import React from "react";
import NavbarHome from "../components/NavbarHome";
import logo from "../assets/logo2.png";
import amityLogo from "../assets/Amity-logo.svg";
import pattern2 from "../assets/pattern2.png";
import pattern3 from "../assets/pattern3.png";
import { Link } from "react-router-dom";
import NiteshSinghRajput from "../assets/Teams-image/Nitesh-Singh-Rajput.png";
import DhruvArora from "../assets/Teams-image/Dhruv-Arora.jpeg";
import UtkarshRanjan from "../assets/Teams-image/Utkarsh-Ranjan.jpeg";
import RajSingh from "../assets/Teams-image/Raj-Singh.jpeg";
import KaustubhKumawat from "../assets/Teams-image/Kaustubh-Kumawat.jpeg";

const teamMembers = [
	{
		imageURL: NiteshSinghRajput,
		name: "Mr. Nitesh Singh Rajput",
		department: "Amity University Rajasthan",
		designation: "Senior Faculty",
	},
	{
		imageURL: DhruvArora,
		name: "Mr. Dhruv Arora",
		designation: "President",
		subDepartment: "RAIoT Labs",
		department: "Amity University Rajasthan",
	},
	{
		imageURL: UtkarshRanjan,
		name: "Mr. Utkarsh Jain",
		designation: "Vice President",
		department: "Amity Innovation Incubator",
	},
	{
		imageURL: RajSingh,
		name: "Mr. Raj Singh Chauhan",
		designation: "Student Coordinator",
		subDepartment: "RAIoT Labs",
		department: "Amity Innovation Incubator",
	},
	{
		imageURL: KaustubhKumawat,
		name: "Mr. Kaustubh Kumawat",
		designation: "CFO",
		subDepartment: "RAIoT Labs",
		department: "Amity innovation Incubator",
	},
];

const Teams = () => {
	return (
		<div className="bg-[#050505] h-[230vh] sm:h-[450vh] bg-center bg-cover">
			<div className="absolute z-10 mx-4 sm:mx-7 my-6 w-[95%]">
				<NavbarHome />
			</div>

			<section className="w-full absolute top-52 text-center">
				<h3 className="gradient-underline-text section-heading">
					MEET THE TEAM
				</h3>
			</section>
			<section className="flex items-center flex-col gap-12 justify-center w-full absolute top-[40vh] sm:top-[60vh] text-center">
				{teamMembers.map((member) => {
					return (
						<div class="box">
							<div class="card">
								<div class="front">
									<img src={member.imageURL} alt="" />
								</div>
								<div class="back">
									<h2>{member.name}</h2>
									<p>
										{member.designation
											? member.designation
											: ""}
									</p>
									<p>
										{member.subDepartment
											? member.subDepartment
											: ""}
									</p>
									<p>
										{member.department
											? member.department
											: ""}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</section>
			<div className="gradient-hr absolute w-[99.99%] mt-14 top-[223vh] sm:top-[430vh]"></div>

			<section className="absolute w-[99.99%] h-[65vh] md:h-[45vh] sm:h-[80vh] text-white bg-[#050505] text-center top-[230vh] sm:top-[445vh] px-5 sm:px-48 bg-center bg-cover">
				<div className="flex flex-col md:flex-row items-center justify-center gap-16 mt-16">
					<img
						src={logo}
						alt="RAIoT"
						className="w-[80px] sm:w-[100px] rounded-full bg-white "
					/>
					<img
						src={amityLogo}
						alt="Amity University Jaipur"
						className="w-[350px] sm:w-[400px] "
					/>
					<p>
						Address: Ground Floor, B-Block SP-1 Kant Kalwar, NH11C,
						RIICO Industrial Area, Rajasthan 303002
					</p>
				</div>
				<hr className="mt-12" />
				<p className="text-gray-500 mt-3 text-base">
					© 2023 RaIoT. All rights reserved.
				</p>
			</section>
		</div>
	);
};

export default Teams;
