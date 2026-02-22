import axios from "axios"
import { useState,useEffect } from "react"
import toast from "react-hot-toast"
export const useCallApi=(url)=>{
    const [data,setData]=useState([])
    
const get=async()=>{
    try {
        console.log("url",url)
        const res=await axios.get(url)
        if(res.status==200){
            setData(res.data.data)
        }
    } catch (error) {
        console.log(error)
    }
}

    useEffect(()=>{
        get()
    },[url])
    return data

}


 export const handleDelete=async(id)=>{
    try {
      const a=confirm("Are you sure you want to delete this employee?")
      if(a){

        const res=await axios.delete(`${import.meta.env.VITE_BASE_URL}deleteemp/${id}`)
        if(res.status==200){
          toast.success("Employee deleted successfully")
        }
      }
    }catch(error){
      console.log(error)
      toast.error("Something went wrong")
    }

  }
