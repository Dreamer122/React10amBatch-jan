import React, { useEffect } from 'react'
import { Home } from './pages/Home'
import {BrowserRouter, Routes,Route} from "react-router"
import { Addemp } from './pages/Addemp'
import { Navbar } from "./Components/Navbar"
import ViewEmployee from './pages/ViewEmployee'
import {Edit} from "./pages/Edit"
const App = () => {
  const obj={
     firstName:"sudarshan",
        lastName:"sharma",
        position:"frontend developer",
        address:"12 sec",
        email:"sudarshan@gmail.com",
        phone:23456789,
        salary:45000
  }
  const getemp=async()=>{
    const res=await fetch("http://localhost:3000/api/v1/createemp",{
      method:"POST",
            headers: {
        'Content-Type': 'application/json' // *specify the content type*
      },

      body:JSON.stringify(obj)
      
    })
    const result= await res.json()
    console.log(result)
  }
  // useEffect(()=>{
  //   getemp()
  // },[])
  return (
   <>

   <BrowserRouter>
   <Navbar/>
   <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/addemp" element={<Addemp/>}/>
<Route path="/Edit/:id" element={<Edit/>}/>
<Route path="/viewemp/:id" element={<ViewEmployee/>}/>

   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App