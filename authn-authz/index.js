const express=require("express")
const app=express()

const cookieParser=require("cookie-parser")
require("dotenv").config()
// middleware to parse json
app.use(express.json())
app.use(cookieParser())

const port=process.env.PORT || 4000

// connect to db
const dbconnect=require("./Config/database")
dbconnect()
// router
const authroutes=require("./Routes/route")
app.use("/api/v1",authroutes)

app.get("/",(req,res)=>{
   res.send("hello welcome to auth app")
})

app.listen(port,()=>{
    console.log("server is running on port"+port)
})