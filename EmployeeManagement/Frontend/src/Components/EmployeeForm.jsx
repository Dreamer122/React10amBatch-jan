import React, { useEffect, useState } from "react";
import axios from "axios"
// import toast from "react-hot-toast"
export const EmployeeForm = ({empdata=null,handleSubmit}) => {
  console.log("empdat=",empdata)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    salary: "",
    address: "",
  } );
  console.log(formData)

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(()=>{
    setFormData(empdata)
  },[empdata])

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={(e)=>handleSubmit(e,formData)}
        className="bg-white p-6 rounded shadow w-full max-w-md space-y-4"
      >
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData?.firstName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData?.lastName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData?.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData?.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="position"
          placeholder="Position"
          value={formData?.position}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData?.salary}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <textarea
          name="address"
          placeholder="Address"
          value={formData?.address}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

