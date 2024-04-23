import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import toast, { Toaster } from "react-hot-toast";

const AdvanceOptions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchSettings = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "http://localhost:1324/api/settings/fetch-settings",
          { credentials: "include" }
        );
        const data = await response.json();

        console.log(data.settings);

        if (data.success) {
          toast.success(data.message);
          setFormData(data.settings);
          console.log(formData);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching settings:", error);
        toast.error("An error occurred while fetching settings");
      } finally {
        setIsLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:1324/api/settings/edit-settings",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="sm:ml-[250px] min-h-[99vh] px-10 py-10 flex items-center justify-center flex-col">
      <Navbar />
      <Toaster />
      {isLoading && <Loader />}
      <div className="bg-[#fafafa] py-10 hover:-translate-y-2 transition-all duration-75 ease-linear w-full rounded-2xl shadow-lg min-h-[85vh] h-full">
        <h2 className="text-center text-gradient bg-clip-text text-transparent text-5xl font-extrabold hover:tracking-widest transition-all ease-linear duration-500">
          Advance Options
        </h2>
        <div className="flex items-start flex-col gap-y-10 justify-center gap-x-36 mt-8 px-32 ">
          <div className="flex items-center justify-start mt-5 w-full gap-x-10">
            <h2 className="font-[Poppins] font-medium ">
              Attendance Marking Range:{" "}
            </h2>
            <input
              type="number"
              placeholder="ex. 3"
              id="attendanceRange"
              onChange={handleChange}
              value={formData.attendanceRange}
              className="border border-gray-300 py-2 text-[#605f5f] px-5 rounded-md transition duration-300 bg-transparent focus:outline-none h-full focus:border-blue-400 mt-1 "
            />
          </div>
          <div className="flex items-center justify-start w-full gap-x-10">
            <h2 className="font-[Poppins] font-medium ">Club Latitude: </h2>
            <input
              type="number"
              placeholder="ex. 3"
              id="clubLatitude"
              onChange={handleChange}
              value={formData.clubLatitude}
              className="border border-gray-300 py-2 text-[#605f5f] px-5 rounded-md transition duration-300 bg-transparent focus:outline-none h-full focus:border-blue-400 mt-1 "
            />
          </div>
          <div className="flex items-center justify-start  w-full gap-x-10">
            <h2 className="font-[Poppins] font-medium ">Club Longitude: </h2>
            <input
              type="number"
              placeholder="ex. 3"
              id="clubLongitude"
              onChange={handleChange}
              value={formData.clubLongitude}
              className="border border-gray-300 py-2 text-[#605f5f] px-5 rounded-md transition duration-300 bg-transparent focus:outline-none h-full focus:border-blue-400 mt-1 "
            />
          </div>
          <button
            className="bg-yellow-300 border hover:border-yellow-300 transition-all hover:bg-transparent duration-150 ease-linear px-4 py-3 rounded-lg"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvanceOptions;
