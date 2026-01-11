const express=require('express');
const app=express();
const port=4000;

// middleware to parse JSON request bodies
app.use(express.json());
const connectDB=require("./Config/database");
// load environment variables from .env file
require("dotenv").config();

connectDB();
const todoRoutes=require("./Routes/route")
app.use("/api/v1",todoRoutes);
app.get("/",(req,res)=>{
    res.send("<h1>My first node app</h1>")
})
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})