import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";

const Members = () => {
  const { currentUser } = useSelector(state => state.user)
  const [isLoading, setIsLoading] = useState(false);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      setIsLoading(true)
      const response = await fetch("http://localhost:1324/api/user/fetch-members", { credentials: "include" })
      const data = await response.json();

      console.log(data)

      if (data.success) {
        setMembers(data.members)
        setIsLoading(false)
        toast.success(data.message)
      }
      if (!data.success) {
        setIsLoading(false)
        toast.error(data.message)
      }

    }
    fetchMembers();
  }, [])

  const downloadCSV = () => {
    const header = Object.keys(members[0]).join(",") + "\n";
    const csv = header + members.map(member => Object.values(member).join(",")).join("\n");
    const csvBlob = new Blob([csv], { type: "text/csv" });
    const csvUrl = window.URL.createObjectURL(csvBlob);
    const tempLink = document.createElement("a");
    tempLink.href = csvUrl;
    tempLink.setAttribute("download", "members.csv");
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };

  const handleChange = (e) => {
    const rowKey = e.target.closest('tr').dataset.key;
    const filteredIndex = members.findIndex((member) => member._id == rowKey);

    if (filteredIndex !== -1) {
      setMembers((prevMembers) => {
        const updatedMembers = [...prevMembers];
        updatedMembers[filteredIndex] = {
          ...updatedMembers[filteredIndex],
          [e.target.id]: e.target.value
        };
        return updatedMembers;
      });
    }
  };


  const handleSubmit = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("http://localhost:1324/api/user/update-members", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(members),
        credentials: "include"
      });
      const data = await response.json();
      if (data.success) {
        setIsLoading(false)
        toast.success(data.message);
      } else {
        setIsLoading(false)
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error updating members:", error);
      toast.error("An error occurred while updating members.");
    }
  };


  return (
    <div className="sm:ml-[250px] text-[#e4e4e4] min-h-[99vh] px-10 py-10 flex items-center justify-center flex-col">
      <Navbar />
      <Toaster />
      {isLoading && <Loader />}
      <div className="bg-[#2a2929] py-10 hover:-translate-y-2 transition-all duration-75 ease-linear w-full rounded-2xl shadow-lg min-h-[85vh] h-full overflow-auto">
        <h2 className="text-center text-gradient bg-clip-text text-transparent text-5xl font-extrabold hover:tracking-widest transition-all ease-linear duration-500">
          Members
        </h2>
        <div className="overflow-x-auto mt-10 pb-3">
          <table className="table-auto min-w-max">
            <thead>
              <tr className='bg-gray-600'>
                <th className='px-4 py-2'>Id</th>
                <th className='px-4 py-2'>Avatar</th>
                <th className='px-4 py-2'>User Name</th>
                <th className='px-4 py-2'>Full Name</th>
                <th className='px-4 py-2'>Email</th>
                <th className='px-4 py-2'>User Type</th>
                <th className='px-4 py-2'>Banned to Issue Components</th>
                <th className='px-4 py-2'>Joined At</th>
              </tr>
            </thead>
            <tbody>
              {
                members.map((member) => (
                  <tr key={member._id} data-key={member._id} className={`${currentUser && member._id === currentUser._id ? "bg-red-800" : ""}`}>
                    <td className="text-center border-b-[1px] border-[#565656] mx-10 px-4 py-2">{member._id}</td>
                    <td className="text-center border-b-[1px] border-[#565656] mx-10 px-4 py-2"><img src={member.avatar} className="w-10" /></td>
                    <td className="text-center border-b-[1px] border-[#565656] mx-10 px-4 py-2">{member.userName}</td>
                    <td className="text-center border-b-[1px] border-[#565656] mx-10 px-4 py-2">{member.fullName}</td>
                    <td className="text-center border-b-[1px] border-[#565656] mx-10 px-4 py-2">{member.email}</td>
                    <td className="text-center border-b-[1px] border-[#565656] mx-10 px-4 py-2">
                      <select className="bg-[#191919]" onChange={handleChange} name="userType" id="userType" value={member.userType}>
                        <option value="Normal User">Normal User</option>
                        <option value="Club Member">Club Member</option>
                        <option value="Admin">Admin</option>
                        <option value="Super Admin">Super Admin</option>
                      </select>
                    </td>
                    <td className="min-w-32 text-center border-b-[1px] border-[#565656] mx-10 px-4 py-2">
                      <select className="bg-[#191919]" onChange={handleChange} name="banUserToIssueComponent" id="banUserToIssueComponent" value={member.banUserToIssueComponent.toString()}>
                        <option value="true">True</option>
                        <option value="false">False</option>
                      </select>
                    </td>
                    <td className="text-center border-b-[1px] border-[#565656] mx-10 px-4 py-2">{member.createdAt}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center mt-5  gap-x-5">
          <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          <button onClick={downloadCSV} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Download CSV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Members;
