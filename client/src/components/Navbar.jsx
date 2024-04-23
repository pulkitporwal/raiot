import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";
import logoutIcon from "../assets/logout.png";
import eventIcon from "../assets/event.png";
import attendanceIcon from "../assets/attendance.png";
import componentsIcon from "../assets/components.png";
import downArrowIcon from "../assets/downArrow.png";
import upArrowIcon from "../assets/upArrow.png";
import profileIcon from "../assets/profile.png";
import settingIcon from "../assets/setting.png";
import memberIcon from "../assets/member.png";
import { removeDataFromLocalStorage } from "../redux/store.js";
import Loader from "./Loader";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user) || null;
  const [loading, setLoading] = useState(false);
  const [componentDropdownOpen, setComponentDropdownOpen] = useState(false);
  const [attendanceDropdownOpen, setAttendanceDropdownOpen] = useState(false);
  const [eventDropdownOpen, setEventDropdownOpen] = useState(false);
  const [displayNormalUser, setDisplayNormalUser] = useState(false);
  const [displayClubMember, setDisplayClubMember] = useState(false);
  const [displayAdmin, setDisplayAdmin] = useState(false);
  const [displaySuperAdmin, setDisplaySuperAdmin] = useState(false);

  useEffect(() => {
    if (currentUser) {
      const userType = currentUser.userType;
      setDisplayNormalUser(
        userType === "Normal User" ||
          userType === "Club Member" ||
          userType === "Admin" ||
          userType === "Super Admin" ||
          userType === "Developer"
      );
      setDisplayClubMember(
        userType === "Club Member" ||
          userType === "Admin" ||
          userType === "Super Admin" ||
          userType === "Developer"
      );
      setDisplayAdmin(
        userType === "Admin" ||
          userType === "Super Admin" ||
          userType === "Developer"
      );
      setDisplaySuperAdmin(
        userType === "Super Admin" || userType === "Developer"
      );
    }
  }, [currentUser]);

  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);

    const response = await fetch("http://localhost:1324/api/auth/signout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include"
    });

    setTimeout(() => {
      removeDataFromLocalStorage();
      navigate("/signin");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed top-0 left-0 flex flex-col justify-between items-center w-screen h-screen sm:w-[250px] sm:h-full px-6 py-5 z-99 bg-[#11101d]">
      {loading && <Loader />}
      <Link to={"/dashboard"}>
        <div className="h-[60px] flex items-center gap-6 justify-center relative cursor-pointer">
          <img src={logo} className="w-12 bg-white rounded-full" alt="logo" />
          <h2 className="text-white text-2xl font-extrabold font-[Poppins]">
            RAIoT
          </h2>
        </div>
      </Link>
      <ul className="flex list-none w-full items-start justify-center flex-col gap-y-4 ">
        {displayClubMember && (
          <li
            onClick={() => {
              setAttendanceDropdownOpen(!attendanceDropdownOpen);
            }}
            className="group relative rounded-lg bottom-0 w-[100%] right-0 flex items-center justify-start gap-5 cursor-pointer hover:bg-[#e3e3e3] py-2 px-5"
          >
            <img src={attendanceIcon} className="w-5" alt="logout" />
            <h3 className="text-[#e3e3e3] text-[15px] group-hover:text-[#1d1c10] font-medium font-[Poppins]">
              Attendance
            </h3>
            <img
              src={attendanceDropdownOpen ? upArrowIcon : downArrowIcon}
              alt="open"
              className="w-4"
            />
          </li>
        )}

        {attendanceDropdownOpen && (
          <div className="pl-16 flex items-start justify-center flex-col gap-y-2 -mt-3">
            <p
              onClick={() => navigate("/mark-attendance")}
              className="cursor-pointer text-sm text-white"
            >
              Mark Attendance
            </p>
            <p
              onClick={() => navigate("/my-attendance")}
              className="cursor-pointer text-sm text-white"
            >
              My Attendance
            </p>
          </div>
        )}
        {displayClubMember && (
          <li
            onClick={() => {
              setComponentDropdownOpen(!componentDropdownOpen);
            }}
            className="group relative rounded-lg bottom-0 w-[100%] flex items-center justify-start gap-5 right-0  cursor-pointer hover:bg-[#e3e3e3] py-2 px-5"
          >
            <img src={componentsIcon} className="w-5" alt="logout" />
            <h3 className="text-[#e3e3e3] text-[15px] group-hover:text-[#1d1c10] font-medium font-[Poppins]">
              Components
            </h3>
            <img
              src={componentDropdownOpen ? upArrowIcon : downArrowIcon}
              alt="open"
              className="w-4"
            />
          </li>
        )}

        {componentDropdownOpen && (
          <div className="pl-16 flex items-start justify-center flex-col gap-y-2 -mt-3">
            {displayAdmin && (
              <>
                <p
                  onClick={() => navigate("/add-component")}
                  className="cursor-pointer text-sm text-white"
                >
                  Add Component
                </p>

                <p
                  onClick={() => navigate("/component-list")}
                  className="cursor-pointer text-sm text-white"
                >
                  Component List
                </p>
              </>
            )}

            <p
              onClick={() => navigate("/issue-component")}
              className="cursor-pointer text-sm text-white"
            >
              Issue Component
            </p>
            <p
              onClick={() => navigate("/issue-history")}
              className="cursor-pointer text-sm text-white"
            >
              Issue History
            </p>
          </div>
        )}

        {displayNormalUser && (
          <li
            onClick={() => {
              setEventDropdownOpen(!eventDropdownOpen);
            }}
            className="group relative rounded-lg bottom-0 w-[100%] right-0 flex items-center justify-start gap-5 cursor-pointer hover:bg-[#e3e3e3] py-2 px-5"
          >
            <img src={eventIcon} className="w-5" alt="logout" />
            <h3 className="text-[#e3e3e3] text-[15px] group-hover:text-[#1d1c10] font-medium font-[Poppins]">
              Events
            </h3>
            <img
              src={eventDropdownOpen ? upArrowIcon : downArrowIcon}
              alt="open"
              className="w-4"
            />
          </li>
        )}
        {eventDropdownOpen && (
          <div className="pl-16 flex items-start justify-center flex-col gap-y-2 -mt-3">
            {displayAdmin && (
              <p
                onClick={() => navigate("/add-event")}
                className="cursor-pointer text-sm text-white"
              >
                Add Event
              </p>
            )}
            <p
              onClick={() => navigate("/events")}
              className="cursor-pointer text-sm text-white"
            >
              Current Events
            </p>
            <p
              onClick={() => navigate("/my-events")}
              className="cursor-pointer text-sm text-white"
            >
              My Events
            </p>
          </div>
        )}

        {displayAdmin && (
          <li
            onClick={() => navigate("/members")}
            className="group relative rounded-lg bottom-0 w-[100%] right-0 flex items-center justify-start gap-5 cursor-pointer hover:bg-[#e3e3e3] py-2 px-5"
          >
            <img src={memberIcon} className="w-5" alt="logout" />
            <h3 className="text-[#e3e3e3] text-[15px] group-hover:text-[#1d1c10] font-medium font-[Poppins]">
              Members
            </h3>
          </li>
        )}
        {displaySuperAdmin && (
          <li
            onClick={() => navigate("/advance-options")}
            className="group relative rounded-lg bottom-0 w-[100%] right-0 flex items-center justify-start gap-5 cursor-pointer hover:bg-[#e3e3e3] py-2 px-5"
          >
            <img src={settingIcon} className="w-5" alt="logout" />
            <h3 className="text-[#e3e3e3] text-[15px] group-hover:text-[#1d1c10] font-medium font-[Poppins]">
              Advance Options
            </h3>
          </li>
        )}
        <li
          onClick={() => navigate("/profile")}
          className="group relative rounded-lg bottom-0 w-[100%] right-0 flex items-center justify-start gap-5 cursor-pointer hover:bg-[#e3e3e3] py-2 px-5"
        >
          <img src={profileIcon} className="w-5" alt="logout" />
          <h3 className="text-[#e3e3e3] text-[15px] group-hover:text-[#1d1c10] font-medium font-[Poppins]">
            My Profile
          </h3>
        </li>
      </ul>
      <div
        onClick={handleLogout}
        className="group relative rounded-lg bottom-0 w-[100%] right-0 flex items-center justify-between gap-5 cursor-pointer hover:bg-[#ebdc36] py-2 px-5"
      >
        <h3 className="text-[#e3e3e3] group-hover:text-[#11101d] font-medium font-[Poppins]">
          Logout
        </h3>
        <img src={logoutIcon} className="w-5" alt="logout" />
      </div>
    </div>
  );
};

export default Navbar;
