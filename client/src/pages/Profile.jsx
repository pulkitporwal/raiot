import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import profileIcon from "../assets/profile.png";
import toast, { Toaster } from 'react-hot-toast'
import Loader from "../components/Loader";
import { updateUserInformationSuccess } from "../redux/userSlice";

const Profile = () => {
  const { currentUser } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    userName: currentUser.userName,
    email: currentUser.email,
    fullName: currentUser.fullName || "",
    avatar: currentUser.avatar || null
  });
  const avatarRef = useRef();

  useEffect(() => {
    // Cleanup function to revoke the object URL when component unmounts
    return () => {
      if (formData.avatar && typeof formData.avatar === 'object') {
        URL.revokeObjectURL(formData.avatar);
      }
    };
  }, [formData.avatar]);

  const handleChange = (e) => {
    if (e.target.id === 'avatar') {
      const selectedImage = e.target.files[0];
      const imagePath = URL.createObjectURL(selectedImage);
      setFormData({ ...formData, avatar: selectedImage });
    } else {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true)
    const formDataToSend = new FormData();
    formDataToSend.append('userName', formData.userName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('fullName', formData.fullName);
    formDataToSend.append('avatar', formData.avatar);
    formDataToSend.append('avatarURL', formData.avatarURL); // Add this line

    try {
      const response = await fetch("http://localhost:1324/api/user/update-information", {
        method: "POST",
        credentials: "include",
        body: formDataToSend
      });
      const data = await response.json();

      console.log("DATA",data.updatedUser);
      if (!data.success) {
        setIsLoading(false)
        toast.error(data.message)
      }

      if (data.success) {
        setIsLoading(false)
        toast.success(data.message)
        dispatch(updateUserInformationSuccess(data.updatedUser))
      }
      
    } catch (error) {
      console.error("Error while submitting form:", error);
    } finally {
      setIsLoading(false)
    }
  };


  return (
    <div className="sm:ml-[250px] min-h-[99vh] px-10 py-10 flex items-center justify-center flex-col">
      <Navbar />
      <Toaster />
      {isLoading ? <Loader /> : ""}
      <div className="bg-[#fafafa] py-10 hover:-translate-y-2 transition-all duration-75 ease-linear w-full rounded-2xl shadow-lg min-h-[85vh] h-full">
        <h2 className="text-center text-gradient bg-clip-text text-transparent text-5xl font-extrabold hover:tracking-widest transition-all ease-linear duration-500">
          Profile
        </h2>
        <div className="flex items-center justify-center gap-x-36 mt-8 px-32 ">
          <div className="flex items-center justify-betweens flex-col py-3">
            {/* Image Div */}
            <div className="inline-block rounded-full overflow-hidden w-[250px] h-[250px] " onClick={() => avatarRef.current.click()}>
              <input
                type="file"
                className="hidden"
                ref={avatarRef}
                name="avatar"
                id="avatar"
                onChange={handleChange}
              />
              <div>
                <img src={formData.avatar ? (typeof formData.avatar === 'string' ? formData.avatar : URL.createObjectURL(formData.avatar)) : profileIcon} className="w-[250px]" alt="User Avatar" />
              </div>
            </div>
            {/* Image Div End */}
            <div>
              <div className="text-center bg-green-500 text-white rounded-md px-3 py-2 mt-5 hover:border-green-500 border hover:text-black hover:bg-transparent transition-all ease-linear duration-150">
                {currentUser.userType}
              </div>
              {currentUser.banUserToIssueComponent ? (
                <div className="bg-red-500 text-white rounded-md px-3 py-2 mt-5 hover:border-red-500 border hover:text-black hover:bg-transparent transition-all ease-linear duration-150">
                  You are banned to Issue Components
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex justify-center gap-y-5 flex-col place-items-start">
            <div className="relative w-[280px] h-[40px]">
              <label
                htmlFor="userName"
                className="absolute z-30 font-[Poppins] px-2 -top-2 left-3 font-medium bg-[#fafafa]"
              >
                User Name
              </label>
              <input
                className="border absolute top-0 left-0 border-gray-300 py-2 text-[#605f5f] px-5 rounded-md transition duration-300 bg-transparent focus:outline-none w-full h-full focus:border-blue-400 mt-1 cursor-not-allowed"
                type="text"
                id="userName"
                value={formData.userName}
                readOnly
              />
            </div>
            <div className="relative w-[280px] h-[40px]">
              <label
                htmlFor="fullName"
                className="absolute z-30 font-[Poppins] px-2 -top-2 left-3 font-medium bg-[#fafafa]"
              >
                Full Name
              </label>
              <input
                className="border absolute top-0 left-0 border-gray-300 py-2 text-[#605f5f] px-5 rounded-md transition duration-300 bg-transparent focus:outline-none w-full h-full focus:border-blue-400 mt-1"
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="relative w-[280px] h-[40px]">
              <label
                htmlFor="email"
                className="absolute z-30 font-[Poppins] px-2 -top-2 left-3 font-medium bg-[#fafafa]"
              >
                Email
              </label>
              <input
                className="border absolute top-0 left-0 border-gray-300 py-2 text-[#605f5f] px-5 rounded-md transition duration-300 bg-transparent focus:outline-none w-full h-full focus:border-blue-400 mt-1 cursor-not-allowed"
                type="email"
                id="email"
                value={formData.email}
                readOnly
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-yellow-300 border hover:border-yellow-300 transition-all hover:bg-transparent duration-150 ease-linear px-4 py-3 rounded-lg "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
