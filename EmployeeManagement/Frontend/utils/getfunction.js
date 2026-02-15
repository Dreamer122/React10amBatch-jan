import axios from "axios"
export const getdata= async(url)=>{
const data= await axios.get(url)
return data
}