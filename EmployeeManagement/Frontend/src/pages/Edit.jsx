import {useState,useEffect} from 'react'

import {EmployeeForm} from "../Components/EmployeeForm"
import {useParams} from "react-router"
import axios from "axios"
export const Edit = () => {
  const [empdata,setEmpdata]=useState({})
  const {id}=useParams()

  const getempdata=async()=>{
    const r=await axios.get(`${import.meta.env.VITE_BASE_URL}getallempbyid/${id}`)
    console.log(r.data.data)
  setEmpdata(r.data.data)

  }
  useEffect(()=>{
    getempdata()
  },[id])

  // update function 
  const updateEmp=async(e,formdata)=>{
    e.preventDefault()
    console.log("update emp")
    const res=await axios.put(`${import.meta.env.VITE_BASE_URL}updateemp/${id}`,{
      ...formdata
    })
    console.log("res",res)
  }

  return (
   <EmployeeForm empdata={empdata && empdata} handleSubmit={updateEmp}/>
   
  )
}
