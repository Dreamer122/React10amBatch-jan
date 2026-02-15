import React,{useEffect,useState} from 'react'
import { getdata } from '../../utils/getfunction'
import EmployeeCard from '../Components/EmployeeCard'
export const Home = () => {
    const [allemp,setallemp]=useState([])

    const get=async()=>{
       const res=await getdata("http://localhost:3000/api/v1/getallemp")
         console.log(res)
         if(res.status==200){
         setallemp(res.data.data)

         }
    }

    useEffect(()=>{
        get()
    },[])

    if(allemp.length==0){
        return <p>Loading...</p>
    }

  return (
   <>
   <p> home page</p>
   <div className='flex flex-wrap gap-2'>


   {
    allemp?.map((emp)=>{
        return <EmployeeCard key={emp._id} obj={emp}/>
    })
   }
   </div>

   </>
  )
}
