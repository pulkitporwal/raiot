import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarHome from "../components/NavbarHome";

const FAQ = () => {
	const [faqs, setFaqs] = useState([
		{
			title: "What is The Full Form Of RaIoT Lab?",
			content:
				"Its a pretty Common Question To be Honest. Its Robotics and Internet of Things Lab",
			isOpen: false,
		},
		{
			title: "What is RaIoT Labs?",
			content:
				"RaIoT Labs is a dynamic and innovative robotics club at our college, fueled by the passion and dedication of its student members. Short for 'Robotics and Internet of Things Labs,' RaIoT Labs stands at the forefront of technological exploration and hands-on learning within our academic community. Run entirely by students, RaIoT Labs serves as a hub for aspiring engineers and tech enthusiasts to collaborate, experiment, and push the boundaries of robotics and IoT technologies. The club is not just a space for theoretical discussions but a vibrant arena where ideas come to life through practical projects, competitions, and workshops. Our members, driven by a shared enthusiasm for robotics, automation, and the Internet of Things, actively engage in designing, building, and programming innovative robotic systems. From autonomous vehicles and smart home devices to cutting-edge IoT applications, RaIoT Labs provides a platform for students to apply theoretical knowledge to real-world challenges. What sets RaIoT Labs apart is its student-led nature. Under the guidance of faculty advisors, members take ownership of the club's activities, fostering a sense of responsibility, leadership, and teamwork. This hands-on approach not only enhances technical skills but also nurtures creativity and problem-solving abilities among participants. The club organizes regular events, showcases projects, and participates in national and international robotics competitions, allowing members to gain exposure, network with professionals in the field, and stay updated on the latest developments in robotics and IoT. In essence, RaIoT Labs is more than just a robotics club; it's a community of like-minded individuals driven by a shared passion for exploring the vast potential of robotics and the Internet of Things. It symbolizes the spirit of innovation, collaboration, and continuous learning that defines our college's commitment to excellence in technology and engineering.",
			isOpen: false,
		},
		{
			title: "Is It Officially Backed My The University?",
			content:
				"RaIoT Labs stands proudly as the university's official robotics club, embodying the institution's commitment to fostering technological excellence and providing students with a platform to explore, innovate, and thrive in the exciting field of robotics and IoT.",
			isOpen: false,
		},
		{
			title: "Who can Join?",
			content:
				"Absolutely! RaIoT Labs welcomes the participation of any university student who shares an interest in the fascinating realms of robotics and the Internet of Things (IoT). As an inclusive and open community, the club extends its arms to students from various academic disciplines and backgrounds, recognizing that diverse perspectives contribute to a rich and vibrant learning environment. Whether you're majoring in engineering, computer science, or any other field, RaIoT Labs provides an opportunity for you to explore, collaborate, and engage with cutting-edge technologies. The club's inclusive nature reflects its commitment to fostering a diverse community where students from different departments can come together, share their unique insights, and collectively contribute to the exciting world of robotics. Joining RaIoT Labs is a straightforward process, typically involving sign-ups, orientations, or introductory sessions at the beginning of each academic term. The club's leadership, which may include both students and faculty advisors, is readily available to guide new members, helping them integrate into the community and providing any necessary resources or support. This inclusively not only enhances the learning experience for participants but also strengthens the club's collaborative spirit. It allows students to form interdisciplinary teams, bringing together their distinct skills and perspectives to tackle complex projects and challenges in the field of robotics and IoT. So, whether you're a seasoned enthusiast or just beginning to explore the world of robotics, if you're a university student with a passion for technology, RaIoT Labs offers an open invitation for you to join, learn, and contribute to the exciting and ever-evolving landscape of robotics at the university level.",
			isOpen: false,
		},
		{
			title: "How to Join?",
			content:
				"Just Click On the Register Button and Fill the Form. We will contact you For an Interview soon in Which we will test your knowledge and passion.",
			isOpen: false,
		},
		{
			title: "Want To Partner With Us?",
			content:
				"Write us the Proposal to Our Mail and we will surely revert back.",
			isOpen: false,
		},
		// Add more FAQs as needed
	]);

	const toggleFAQ = (index) => {
		const updatedFaqs = [...faqs];
		updatedFaqs[index].isOpen = !updatedFaqs[index].isOpen;
		setFaqs(updatedFaqs);
	};

	return (
			
		<div className="bg-[#050505] h-[180vh] bg-center bg-cover">
			<div className="absolute z-10 mx-4 sm:mx-7 my-6 w-[95%]">
				<NavbarHome />
			</div>

			<section className="absolute w-full top-[20vh] text-center">
				<div className="bg-[#050505] h-screen bg-center bg-cover flex justify-center items-start">
					<div className="w-full max-w-3xl mx-auto">
						<div className="w-full p-6 bg-gray-800 rounded-lg">
							<h1 className="text-3xl font-bold uppercase gradient-underline-text section-heading text-white mb-10 text-center">
								Frequently Asked Questions
							</h1>
							{faqs.map((faq, index) => (
								<div
									key={index}
									className={index == 0 ? "mt-14" : "mt-4"}
								>
									<div
										className={`bg-gray-900 p-4 rounded-lg cursor-pointer ${
											faq.isOpen ? "open" : ""
										}`}
										onClick={() => toggleFAQ(index)}
									>
										<h2 className="text-xl font-semibold text-white mb-4">
											{faq.title}
										</h2>
										{faq.isOpen && (
											<p className="text-white">
												{faq.content}
											</p>
										)}
									</div>
								</div>
							))}

							<div className="flex items-center justify-center gap-x-5 mt-8 text-white text-center">
								<Link
									to={"/signup"}
									className="button w-52 mt-10"
								>
									Register
								</Link>
								<Link
									to={`mailto:adityashailendra477@gmail.com?subject=Regarding`}
									className="button w-52 mt-10"
								>
									Contact Us
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default FAQ;
