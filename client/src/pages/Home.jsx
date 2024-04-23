import React from "react";
import NavbarHome from "../components/NavbarHome";
import logo from "../assets/logo2.png";
import amityLogo from "../assets/Amity-logo.svg";
import pattern from "../assets/pattern.png";
import pattern3 from "../assets/pattern3.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div
      className="bg-[#050505] h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${pattern})` }}
    >
      <div className="absolute z-10 mx-4 sm:mx-7 my-6 w-[95%]">
        <NavbarHome />
      </div>

      <section className="w-full absolute top-48 text-center">
        <h3 className="text-gradient">Robotics And Internet Of Things Lab</h3>
        <p className="text-xl text-white mt-5">
          The One And Only Robotics Club Of Amity University Rajasthan
        </p>
        <Link to= {!currentUser ? "/signup" : "/dashboard"} className="button w-[110px] mt-10">
          {!currentUser ? "Register" : "Dashboard"}
        </Link>
      </section>

      <section className="absolute h-[90vh] sm:h-[80vh] text-white bg-[#050505] text-center top-[100vh] px-5 sm:px-48">
        <h3 className="uppercase text-6xl font-black mt-24 section-heading">
          About Us
        </h3>
        <p className=" text-2xl mt-10 font-normal paragraph-gradient">
          <span>At RaIoT Lab, we are passionate </span>
          <span> about exploring the</span>
          <span>limitless possibilities that robotics </span>
          <span> offers. Our club</span>
          <span>is a diverse community of students, </span>
          <span> engineers, and</span>
          <span>enthusiasts who share a common </span>
          <span>interest in robotics and automation.</span>
          <span> Whether you're a seasoned robotics </span>
          <span>expert or</span>
          <span>a newcomer eager to learn, we</span>
          <span> welcome individuals from</span>
          <span>all backgrounds and skill levels.</span>
        </p>
      </section>

      <section className="absolute h-[90vh] sm:h-[80vh] text-white bg-[#050505] text-center top-[190vh] sm:top-[165vh] px-5 sm:px-48">
        <h3 className="uppercase text-6xl font-black mt-24 section-heading">
          Our Mission
        </h3>
        <p className=" text-2xl mt-10 font-normal paragraph-gradient">
          <span>Our mission is to foster a </span>
          <span>collaborative environment where </span>
          <span>members can enhance </span>
          <span>their robotics knowledge, develop </span>
          <span> technical skills, </span>
          <span>and engage in exciting projects </span>
          <span>that push the boundaries of </span>
          <span>innovation. We </span>
          <span>believe in the power of robotics to</span>
          <span> shape the future and aim </span>
          <span>to inspire the next generation</span>
          <span> of leaders in the field.</span>
        </p>
      </section>
      <section className="absolute h-[131vh] sm:h-[150vh] text-white bg-[#050505] text-center top-[270vh] sm:top-[220vh] px-5 sm:px-48">
        <h3 className="uppercase text-6xl font-black mt-24 section-heading">
          WHAT WE DO
        </h3>
        <p className=" text-2xl mt-10 font-normal paragraph-gradient">
          <div>
            <h2 className="text-white text-2xl">
              <span>1. Hands-On Projects:</span>
            </h2>
            <p className="text-[#aaaf9e] text-base mb-5">
              Dive into practical, real-world applications of robotics through
              our hands-on projects. From building simple robots to tackling
              complex challenges, our club provides a platform for you to apply
              theoretical knowledge to tangible creations.
            </p>
            <h2 className="text-white text-2xl">
              <span>2. Workshops and Training:</span>
            </h2>
            <p className="text-[#aaaf9e] text-base mb-5">
              Stay at the forefront of robotics technology with our workshops
              and training sessions. Led by experienced members and invited
              experts, these sessions cover a wide range of topics, including
              programming, electronics, and mechanical design.
            </p>
            <h2 className="text-white text-2xl">
              <span>3. Competitions:</span>
            </h2>
            <p className="text-[#aaaf9e] text-base mb-5">
              Put your skills to the test by participating in local and national
              robotics competitions. Our club actively seeks opportunities for
              members to showcase their talents and compete against other
              robotics enthusiasts.
            </p>
            <h2 className="text-white text-2xl">
              <span>4. Guest Speakers and Events:</span>
            </h2>
            <p className="text-[#aaaf9e] text-base mb-5">
              Connect with professionals and experts in the field through guest
              speaker events. Learn about the latest trends, advancements, and
              career opportunities in robotics, and expand your network within
              the robotics community.
            </p>
            <h2 className="text-white text-2xl">
              <span>5. Community Outreach:</span>
            </h2>
            <p className="text-[#aaaf9e] text-base mb-5">
              We believe in giving back to the community. Engage in outreach
              programs where we use robotics as a tool to inspire and educate
              others. Whether it's hosting robotics workshops for local schools
              or participating in community events, we strive to make a positive
              impact.
            </p>
          </div>
        </p>
      </section>
      <div className="gradient-hr absolute w-[99.99%] mt-14 top-[394vh] sm:top-[340vh]"></div>
      <section
        className="absolute w-[99.99%] h-[100vh] sm:h-[100vh] text-white bg-[#050505] text-center top-[401vh] sm:top-[350vh] px-5 sm:px-48 bg-center bg-cover"
        style={{
          backgroundImage: `url(${pattern3})`,
          backgroundColor: `rgba(255, 255, 255, 0.1)`,
        }}
      >
        <h3 className="uppercase text-6xl font-black mt-24 section-heading">
          Who Can Join??
        </h3>
        <p className="mt-10 font-normal paragraph-gradient text-3xl">
          <span className="font-bold ">All Years</span>
          <p className="text-[#aaaf9a] text-sm">
            Students Of All Years Can Join.
          </p>
        </p>
        <p className="mt-10 font-normal paragraph-gradient text-3xl">
          <span className="font-bold ">No Previous Experience Required</span>
          <p className="text-[#aaaf9a] text-sm">
            No Previous Experience Is Necessary, But is appreciated. But
            enthusiasm to Learn Is Compulsory.
          </p>
        </p>
        <p className="mt-10 font-normal paragraph-gradient text-3xl">
          <span className="font-bold ">
            Should Be A Student Of Amity University Rajasthan
          </span>
          <p className="text-[#aaaf9a] text-sm">
            Only Students of Amity University Can Join as per Guidelines from
            the University.
          </p>
        </p>
        <p className="mt-10 font-normal paragraph-gradient text-3xl">
          <span className="font-bold ">Laptop Is Mandatory</span>
          <p className="text-[#aaaf9a] text-sm">
            You Must at least have a portable device that you can carry to the
            lab, on which you can code.
          </p>
        </p>
      </section>
      <div className="gradient-hr absolute w-[99.99%] mt-14 top-[494vh] sm:top-[440vh]"></div>
      <section className="absolute w-[99.99%] h-[75vh] sm:h-[90vh] text-white bg-[#050505] text-center top-[501vh] sm:top-[450vh] px-5 sm:px-48 bg-center bg-cover">
        <h3 className="uppercase text-6xl font-black mt-24 section-heading">
          Contact Us
        </h3>
        <p className="mt-10 font-normal paragraph-gradient text-3xl">
          <span className="font-bold ">Our official Email ID</span>
          <p className="text-[#44ee44] text-xl mt-3">
            adityashailendra477@gmail.com
          </p>
          <Link
            to={`mailto:adityashailendra477@gmail.com?subject=Regarding`}
            className="button w-[170px] mt-5"
          >
            E-Mail Now
          </Link>
        </p>
        <p className="mt-10 font-normal paragraph-gradient text-3xl">
          <span className="font-bold ">Social Handles</span>
          <p className="text-[#aaaf9a] text-sm">
            <a
              href="https://www.linkedin.com/in/adityarajsingh007/"
              class="icon linkedin"
              title="LinkedIn"
              target="_blank"
            >
              <svg viewBox="0 0 512 512">
                <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/"
              class="icon instagram"
              title="Instagram"
              target="_blank"
            >
              <svg width="100%" height="100%" viewBox="0 0 200 200">
                <defs>
                  <linearGradient id="gradient1" x1=".8" y1=".8" x2="0">
                    <stop offset="0" stop-color="#c92bb7" />
                    <stop offset="1" stop-color="#3051f1" />
                  </linearGradient>

                  <radialGradient id="gradient2" cx=".2" cy="1" r="1.2">
                    <stop offset="0" stop-color="#fcdf8f" />
                    <stop offset=".1" stop-color="#fbd377" />
                    <stop offset=".25" stop-color="#fa8e37" />
                    <stop offset=".35" stop-color="#f73344" />
                    <stop offset=".65" stop-color="#f73344" stop-opacity="0" />
                  </radialGradient>

                  <rect
                    id="logoContainer"
                    x="0"
                    y="0"
                    width="200"
                    height="200"
                    rx="50"
                    ry="50"
                  />
                </defs>

                <use xlink:href="#logoContainer" fill="url(#gradient1)" />
                <use xlink:href="#logoContainer" fill="url(#gradient2)" />

                <rect
                  x="35"
                  y="35"
                  width="130"
                  height="130"
                  rx="30"
                  ry="30"
                  fill="none"
                  stroke="#fff"
                  stroke-width="13"
                />

                <circle
                  cx="100"
                  cy="100"
                  r="32"
                  fill="none"
                  stroke="#fff"
                  stroke-width="13"
                />

                <circle cx="140" cy="62" r="9" fill="#fff" />
              </svg>
            </a>
          </p>
        </p>
      </section>
      <div className="gradient-hr absolute w-[99.99%] mt-14 top-[569vh] sm:top-[530vh]"></div>
      <section className="absolute w-[99.99%] h-[65vh] md:h-[45vh] sm:h-[80vh] text-white bg-[#050505] text-center top-[576vh] sm:top-[540vh] px-5 sm:px-48 bg-center bg-cover">
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
            Address: Ground Floor, B-Block SP-1 Kant Kalwar, NH11C, RIICO
            Industrial Area, Rajasthan 303002
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

export default Home;
