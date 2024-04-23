import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar.jsx";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col justify-between pr-8">
      <Toaster />
      <div className="h-[100vh] z-[200]">
        <Navbar isOpen={isOpen} />  
        <div>
          <div className="text-white">Dashboard</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
