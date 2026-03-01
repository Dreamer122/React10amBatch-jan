const cloudinary=require("cloudinary").v2
const FileUpload=require("../Model/File")

const issupported=(filetype,supported)=>{

    return (supported.includes(filetype))
}

const uploadtocloudinary= async (file,folder,quality)=>{
    const options={"folder":folder || "batch10am"}
     options.resource_type="auto" 
     if(quality){
        options.quality=quality
     }
    // console.log("options=",options)
    const res=await cloudinary.uploader.upload(file.tempFilePath,options)
    // console.log(res)
    return res
}



exports.ImageUpload=async (req,res)=>{
    try{
        // get all details from req
        // console.log("req",req.body)
        const {name,email}=req.body
        const file=req.files.file
        console.log("file",file)

        // get file type
        const supportedTypes=["jpeg","jpg","png"]
        // const filetype=file.name.split(".").slice(-1)[0].toLowercase()
        const type=file.name.split(".").slice(-1)[0]
        // console.log("type",type)
        const filetype=type.toLowerCase()
        // console.log("type",filetype)
        // check file type 
       const check= issupported(filetype,supportedTypes)
       if(!check){
        return res.status(400).json({
            success:false,
            message:"file type not supported"
        })
       }
    //    upload file to cloudinary
    const respose=await uploadtocloudinary(file,"batch10am")
    // console.log("respose",respose)
    // send data to db
    const newdoc=await FileUpload.create({
        name,email,
        fileUrl:respose.secure_url
    })
    res.status(201).json({
        success:true,
        message:"data created successfully",
        data:newdoc
    })


    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"error occured while uploading image"+error,

        })

    }
}


exports.VideoUpload=async (req,res)=>{
    try{
        // get all details from req
        // console.log("req",req.body)
        const {name,email}=req.body
        const file=req.files.file
        console.log("file",file)

        // get file type
        const supportedTypes=["mp4","mov"]
        // const filetype=file.name.split(".").slice(-1)[0].toLowercase()
        const type=file.name.split(".").slice(-1)[0]
        // console.log("type",type)
        const filetype=type.toLowerCase()
        // console.log("type",filetype)
        // check file type 
       const check= issupported(filetype,supportedTypes)
       if(!check){
        return res.status(400).json({
            success:false,
            message:"file type not supported"
        })
       }
    //    upload file to cloudinary
    const respose=await uploadtocloudinary(file,"batch10am")
    // console.log("respose",respose)
    // send data to db
    const newdoc=await FileUpload.create({
        name,email,
        fileUrl:respose.secure_url
    })
    res.status(201).json({
        success:true,
        message:"data created successfully",
        data:newdoc
    })


    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"error occured while uploading video"+error,

        })

    }
}


exports.ImageSizeReducer=async (req,res)=>{
    try{
        // get all details from req
        // console.log("req",req.body)
        const {name,email}=req.body
        const file=req.files.file
        console.log("file",file)

        // get file type
        const supportedTypes=["jpeg","jpg","png"]
        // const filetype=file.name.split(".").slice(-1)[0].toLowercase()
        const type=file.name.split(".").slice(-1)[0]
        // console.log("type",type)
        const filetype=type.toLowerCase()
        // console.log("type",filetype)
        // check file type 
       const check= issupported(filetype,supportedTypes)
       if(!check){
        return res.status(400).json({
            success:false,
            message:"file type not supported"
        })
       }
    //    upload file to cloudinary
    const respose=await uploadtocloudinary(file,"batch10am",50)
    // console.log("respose",respose)
    // send data to db
    const newdoc=await FileUpload.create({
        name,email,
        fileUrl:respose.secure_url
    })
    res.status(201).json({
        success:true,
        message:"data created successfully",
        data:newdoc
    })


    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"error occured while uploading image"+error,

        })

    }
}