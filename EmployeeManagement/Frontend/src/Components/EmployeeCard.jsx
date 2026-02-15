import React from "react";
import { FaPhone, FaEnvelope, FaUser } from "react-icons/fa";
import { Link } from "react-router";
const EmployeeCard = ({ obj }) => {
  const { firstName, lastName, email, phone } = obj;

  return (
    <div className="w-full sm:w-[350px] bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300">
      
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-2xl shadow-md">
          <FaUser />
        </div>
      </div>

      {/* Employee Details */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          {firstName} {lastName}
        </h2>

        <div className="flex items-center justify-center gap-2 text-gray-600 text-sm mt-2">
          <FaPhone className="text-blue-500" />
          <span>{phone}</span>
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-600 text-sm mt-1">
          <FaEnvelope className="text-blue-500" />
          <span>{email}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 mt-4">
      <Link to={`/viewemp/${obj._id}`} className="flex-1 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          View
        
        </Link>

        <button className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Edit
        </button>

        <button className="flex-1 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
