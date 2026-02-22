import React,{useEffect,useState} from 'react'
import { useCallApi,handleDelete} from '../../utils/getfunction'
import EmployeeCard from '../Components/EmployeeCard'
export const Home = () => {
    const [allemp,setallemp]=useState([])
    const data=useCallApi(`${import.meta.env.VITE_BASE_URL}getallemp`)
   console.log(data)

   const deleteemp=async(id)=>{
    handleDelete(id)
    const newdata=allemp.filter((emp)=>emp._id!==id)
    setallemp(newdata)

   }




    useEffect(()=>{
       setallemp(data)
    },[data])


    if(allemp?.length==0){
        return <p>Loading...</p>
    }

  return (
   <>
   <p> home page</p>
   <div className='flex flex-wrap gap-2'>


   {
    allemp?.map((emp)=>{
        return <EmployeeCard key={emp._id} obj={emp} handleDelete={deleteemp}/>
    })
   }
   </div>

   </>
  )
}
