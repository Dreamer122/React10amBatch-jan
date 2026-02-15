const express=require("express");
const app=express();
const cors=require("cors")
require("dotenv").config();
const port=3000
// middleware
app.use(express.json());
app.use(cors({
    origin:"*"
}))
const route=require("./Routes/Route");
app.use("/api/v1",route);
// database connection
const connectDB=require("./Config/database");
connectDB();
// server
app.get("/",(req,res)=>{
    res.send("employee app is running")
})
app.listen(port,()=>{
    console.log(`employee App is running at port ${port}`);
})