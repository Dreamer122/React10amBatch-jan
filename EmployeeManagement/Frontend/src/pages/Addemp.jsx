import React from 'react'
import {EmployeeForm} from '../Components/EmployeeForm'
import axios from 'axios';
import {useNavigate} from "react-router"

export const Addemp = () => {
  const navigate=useNavigate()

  const handleSubmit = async (e,formData) => {
    e.preventDefault();

    // Check if any field is empty
    for (let key in formData) {
      if (formData[key] === "") {
        alert("All fields are required");
        return;
      }
    }
    // send data to database
    try{
      const res=await axios.post(`${import.meta.env.VITE_BASE_URL}createemp`,{
        ...formData
      })
      console.log(res.data)
      // toast.success("employee created successfully")
      navigate("/")
    }
    catch(error){
      console.log("error",error)
    }

    
  };
  return (
    <EmployeeForm handleSubmit={handleSubmit}/>
  )
}
