const signUp=require("../Models/signup")
const  bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
exports.Signup=async(req,res)=>{
    try{
// get alln data form req
const {fullname,email,phone,password,role}=req.body

// check all fields are preset
if(!fullname || !email || !phone || !password || !role){
    return res.status("404").json({
        success:false,
        message:"all fields are required"

    })
}
// check email exists or not
const user= await signUp.findOne({email:email})
if(user){
    res.status(409).json({
        success:false,
        message:"user already exists with this email"
    })
}

// password hashed
let hashedpassword;
try{
    hashedpassword=await bcrypt.hash(password,10)


}
catch(error){
    console.log("error occured while hashing password")
    return res.status(500).json({
        success:false,
        message:"error occured while hashing password"
    })
}

// send data to db
const newdoc=await new signUp({
    fullname,
    email,
    phone,
    role,
    password:hashedpassword
}).save()


return res.status(201).json({
    sucess:true,
    message:"signup successfully",
    data:newdoc
})
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"error occured while signup"+error
        })

    }

}

exports.logIn=async(req,res)=>{
    try{
        // get data from user
        const {email,password}=req.body

        if(!email || !password){
            res.status(404).json({
                success:false,
                message:"missing required feilds"
            })
        }
        // user exists or not
        let user= await signUp.findOne({email:email})
        if(!user){
            res.status(404).json({
                success:false,
                message:"user not exists"
            })
        }
        console.log("user",user)
        // compare password
        const match= await bcrypt.compare(password,user.password)
        if(!match){
            res.status(400).json({
                success:false,
                message:"invalid password"
            })
        }
        console.log("match",match)

        // generate token
        const payload={
            email:email,
            id:user._id,
            role:user.role
        }

        const token =jwt.sign(payload,process.env.JWT_SECRET_KEY,{
            expiresIn:"24h"
        })
       user=user.toObject()
        user.password=undefined
        user.token=token
        // res.status(200).json({
        //     success:true,
        //     message:"logged in successfully",
        //     data:user,
        //     token:token
        // })
         const options={
    expires: new Date(Date.now() +2*24*60*60*1000),
    // expires: new Date(Date.now() +5000),
    httpOnly:true,
 }

         res.cookie("token",token,options).status(200).json({
    success:true,
    message:"login success",
    token:token,
    user
    })


    }
catch(error){
    res.status(500).json({
        success:false,
    message:"error occured while logging account"+error 
  
})
}
}
