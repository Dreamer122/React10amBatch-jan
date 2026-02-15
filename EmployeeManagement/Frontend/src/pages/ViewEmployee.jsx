import React, { useEffect } from "react";
import { FaUserTie, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave } from "react-icons/fa";
import { getdata } from "../../utils/getfunction";
import { Link, useParams } from "react-router";
const ViewEmployee = () => {
    const {id}=useParams()
    const [emp,setemp]=React.useState({})

    const getemp=async()=>{
        const res=await getdata(`http://localhost:3000/api/v1/getallempbyid/${id}`)
        console.log(res)
        if(res.status==200){
            setemp(res.data.data)
        }   

    }
    useEffect(()=>{
        getemp()
    },[id])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center text-white">
          <div className="w-24 h-24 mx-auto rounded-full bg-white/20 flex items-center justify-center text-4xl mb-4 shadow-lg">
            <FaUserTie />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">
            {emp.firstName} {emp.lastName}
          </h1>
          <p className="text-blue-100 mt-2">
            {emp.position}

          </p>
        </div>

        {/* Details Section */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow-sm">
            <FaBriefcase className="text-blue-600 text-xl" />
            <div>
              <p className="text-gray-500 text-sm">Position</p>
              <p className="font-semibold text-gray-800">
                {emp.position}
                </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow-sm">
            <FaMoneyBillWave className="text-green-600 text-xl" />
            <div>
              <p className="text-gray-500 text-sm">Salary</p>
              <p className="font-semibold text-gray-800">₹ 
                {emp.salary}
                </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow-sm">
            <FaEnvelope className="text-red-500 text-xl" />
            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p className="font-semibold text-gray-800">
                {emp.email}
                </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow-sm">
            <FaPhone className="text-blue-500 text-xl" />
            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <p className="font-semibold text-gray-800">
                {emp.phone}
                </p>
            </div>
          </div>

          <div className="md:col-span-2 flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow-sm">
            <FaMapMarkerAlt className="text-pink-500 text-xl" />
            <div>
              <p className="text-gray-500 text-sm">Address</p>
              <p className="font-semibold text-gray-800">
                {emp.address}
                </p>
            </div>
          </div>

        </div>

        {/* Footer Buttons */}
        <div className="p-6 flex flex-col sm:flex-row justify-center gap-4 bg-gray-100">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Edit
          </button>
          <button className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
          <Link to="/">Back</Link>
          </button>
        </div>

      </div>
    </div>
  );
};

export default ViewEmployee;
