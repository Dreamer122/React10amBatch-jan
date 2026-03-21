const jwt=require("jsonwebtoken")
require("dotenv").config()

exports.auth=(req,res,next)=>{
    try{
        // console.log("req",req.cookies)
        console.log("req",req.headers)

        // const token=req.body.token || req.cookies.token
        // console.log("token",token)
        const token=req.cookies.token
        // const token=req.headers.authorization.replace("Bearer ","")
        console.log("token",token)

        // || req.cookies.token || req.header("Authorization").replace("Bearer ","")
        // console.log("body=",req.body.token)
        // console.log("cookie=",req.cookies.token)
        // console.log("header",req.header("Authorization").replace("Bearer ",""))

        if(!token){
            return res.status(400).json({
                error:"Please provide a token"
            })

        }

        // verify token , or decode token 
        const decode=jwt.verify(token,process.env.JWT_SECRET_KEY);
        console.log(decode)
        req.user=decode

        // return res.status(200).json({
        //     success:true,
        //     message:"Token is valid",
        //     decode
        // })
        next()
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"couln't verify user",
            error:"Something went wrong"+error
        })
    }

}
exports.isStudent=(req,res,next)=>{
    try{
        if(req.user.role!="Student"){
            return res.status(401).json({
                success:false,
                error:"You are not a student"
                })
        }
next()
    }
    catch(error){
        return res.statu(500).json({
            success:false,
            message:"error occured in authenticating student route",
        })
    }

}

exports.isAdmin=(req,res,next)=>{
    try{
        if(req.user.role!="Admin"){
            return res.status(401).json({
                success:false,
                error:"You are not Admin"
                })
        }
next()
    }
    catch(error){
        return res.statu(500).json({
            success:false,
            message:"error occured in authenticating admin route",
        })
    }

}
