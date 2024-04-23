import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";

const AddEvents = () => {
  const { currentUser } = useSelector(state => state.user);
  const [formData, setFormData] = useState({
    eventName: "",
    eventDetail: "",
    expireOn: "",
    location: "",
    prize: "",
    thumbnail: null,
    banner: null,
    attachedDocument: "",
    eventDescription: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);
  const bannerRef = useRef();
  const thumbnailRef = useRef();

  const handleChange = (e) => {
    if (e.target.id === "thumbnail" || e.target.id === "banner") {
      const image = e.target.files[0];
      if (image) {
        const reader = new FileReader();
        reader.onload = () => {
          const imageDataURL = reader.result;
          if (e.target.id === "thumbnail") {
            setThumbnailPreview(imageDataURL);
            setFormData({ ...formData, thumbnail: image });
          } else {
            setBannerPreview(imageDataURL);
            setFormData({ ...formData, banner: image });
          }
        };
        reader.readAsDataURL(image);
      }
    } else {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value
      });
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true)
    const formDataToSend = new FormData();
    formDataToSend.append('eventName', formData.eventName);
    formDataToSend.append('eventDetail', formData.eventDetail);
    formDataToSend.append('expireOn', formData.expireOn);
    formDataToSend.append('thumbnail', formData.thumbnail);
    formDataToSend.append('attachedDocument', formData.attachedDocument);
    formDataToSend.append('banner', formData.banner);
    formDataToSend.append('eventDescription', formData.eventDescription);
    formDataToSend.append('prize', formData.prize);
    formDataToSend.append('location', formData.location);

    try {
      const response = await fetch("http://localhost:1324/api/event/add-event", {
        method: "POST",
        credentials: "include",
        body: formDataToSend
      });
      const data = await response.json();

      console.log("DATA", data);
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
  console.error(formData);

  return (
    <div className="sm:ml-[250px] text-[#e4e4e4] min-h-[99vh] px-10 py-10 flex items-center justify-center flex-col">
      <Navbar />
      <Toaster />
      {isLoading && <Loader />}
      <div className="bg-[#2a2929] py-10 hover:-translate-y-2 transition-all duration-75 ease-linear w-full rounded-2xl shadow-lg min-h-[85vh] h-full overflow-auto">
        <h2 className="text-center text-gradient bg-clip-text text-transparent text-5xl font-extrabold hover:tracking-widest transition-all ease-linear duration-500">
          Add Event
        </h2>
        <div className="flex items-center justify-center gap-x-36 mt-8 px-32 ">
          <div className="flex items-center justify-betweens gap-y-10 flex-col py-3">
            <div className="relative w-[70vw] h-[40px]" >
              <label className="absolute z-30 font-[Poppins] px-2 -top-2 left-3 font-medium bg-[#2a2929]" htmlFor="eventName">Event Name:</label>
              <input value={formData.eventName} onChange={handleChange} className="border absolute top-0 left-0 border-gray-300 py-2 text-[#fff] px-5 rounded-md transition duration-300 bg-transparent focus:outline-none w-full h-full focus:border-blue-400 mt-1" type="text" id='eventName' placeholder="Enter event name" />
            </div>
            <div className="relative w-[70vw] h-[40px]" >
              <label className="absolute z-30 font-[Poppins] px-2 -top-2 left-3 font-medium bg-[#2a2929]" htmlFor="eventDescription">Event Description:</label>
              <input value={formData.eventDescription} onChange={handleChange} className="border absolute top-0 left-0 border-gray-300 py-2 text-[#fff] px-5 rounded-md transition duration-300 bg-transparent focus:outline-none w-full h-full focus:border-blue-400 mt-1" type="text" id='eventDescription' placeholder="Enter event detail" />
            </div>

            <div className="relative w-[70vw] h-[40px]" >
              <label className="absolute z-30 font-[Poppins] px-2 -top-2 left-3 font-medium bg-[#2a2929]" htmlFor="expireOn">Expire On:</label>
              <input value={formData.expireOn} onChange={handleChange} className="border absolute top-0 left-0 border-gray-300 py-2 text-[#fff] px-5 rounded-md transition duration-300 bg-transparent focus:outline-none w-full h-full focus:border-blue-400 mt-1" type="date" id='expireOn' />
            </div>
            <div className="relative w-[70vw] h-[100px]" >
              <label className="absolute z-30 font-[Poppins] px-2 -top-2 left-3 font-medium bg-[#2a2929]" htmlFor="thumbnail">Thumbnail:</label>
              <input onChange={handleChange} ref={thumbnailRef} className="border hidden absolute top-0 left-0 border-gray-300 py-2 text-[#fff] px-5 rounded-md transition duration-300 bg-transparent focus:outline-none w-full h-full focus:border-blue-400 mt-1" type="file" id='thumbnail' />
              {thumbnailPreview && <img src={thumbnailPreview} alt="Thumbnail Preview" className="absolute top-0 left-[50%] -translate-x-[50%] rounded-md h-[100px] " />}
              <div onClick={() => thumbnailRef.current.click()} className="border border-dotted absolute top-0 left-0 border-gray-300 py-2 px-5 rounded-md transition duration-300 bg-transparent focus:outline-none w-full h-full text-blue-400 font-semibold focus:border-blue-400 mt-1 flex items-center justify-center cursor-pointer"  >
                {thumbnailPreview ? "" : "Select the Thumbnail"}
              </div>
            </div>
            <div className="relative w-[70vw] h-[100px]" >
              <label className="absolute z-30 font-[Poppins] px-2 -top-2 left-3 font-medium bg-[#2a2929]" htmlFor="banner">Banner:</label>
              <input onChange={handleChange} ref={bannerRef} className="border hidden absolute top-0 left-0 border-gray-300 py-2 text-[#fff] px-5 rounded-md transition duration-300 bg-transparent focus:outline-none w-full h-full focus:border-blue-400 mt-1" type="file" id='banner' />
              {bannerPreview && <img src={bannerPreview} alt="Banner Preview" className="absolute top-0 left-[50%] -translate-x-[50%] h-[100px] rounded-md" />}
              <div onClick={() => bannerRef.current.click()} className="border border-dotted absolute top-0 left-0 border-gray-300 py-2 px-5 rounded-md transition duration-300 bg-transparent focus:outline-none w-full h-full text-blue-400 font-semibold focus:border-blue-400 mt-1 flex items-center justify-center cursor-pointer"  >
                {bannerPreview ? "" : "Select the Banner"}
              </div>
            </div>
            <div className="relative w-[70vw] h-[40px]" >
              <label className="absolute z-30 font-[Poppins] px-2 -top-2 left-3 font-medium bg-[#2a2929]" htmlFor="prize">prize:</label>
              <input value={formData.prize} onChange={handleChange} className="border absolute top-0 left-0 border-gray-300 py-2 text-[#fff] px-5 rounded-md transition duration-300 bg-transparent focus:outline-none w-full h-full focus:border-blue-400 mt-1" type="text" id='prize' placeholder="Enter prize" />
            </div>
            <div className="relative w-[70vw] h-[40px]" >
              <label className="absolute z-30 font-[Poppins] px-2 -top-2 left-3 font-medium bg-[#2a2929]" htmlFor="location">location:</label>
              <input value={formData.location} onChange={handleChange} className="border absolute top-0 left-0 border-gray-300 py-2 text-[#fff] px-5 rounded-md transition duration-300 bg-transparent focus:outline-none w-full h-full focus:border-blue-400 mt-1" type="text" id='location' placeholder="Enter location" />
            </div>
            <div className="relative w-[70vw] h-[40px]" >
              <label className="absolute z-30 font-[Poppins] px-2 -top-2 left-3 font-medium bg-[#2a2929]" htmlFor="attachedDocument">Attached Document:</label>
              <input value={formData.attachedDocument} onChange={handleChange} className="border absolute top-0 left-0 border-gray-300 py-2 text-[#fff] px-5 rounded-md transition duration-300 bg-transparent focus:outline-none w-full h-full focus:border-blue-400 mt-1" type="url" id='attachedDocument' placeholder="Enter document URL" />
            </div>
            <div className="relative w-[70vw] h-[500px]" >
              <label className="absolute z-30 font-[Poppins] px-2 -top-2 left-3 font-medium bg-[#2a2929]" htmlFor="eventDetail">Event Detail:</label>
              <textarea value={formData.eventDetail} onChange={handleChange} className="border absolute top-0 left-0 border-gray-300 py-2 text-[#fff] px-5 rounded-md transition duration-300 bg-transparent focus:outline-none w-full focus:border-blue-400 mt-1 h-[500px]" id='eventDetail' placeholder="Enter event detail" rows={120}></textarea>
            </div>
            <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvents;
