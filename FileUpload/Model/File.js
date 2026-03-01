const mongoose=require("mongoose")
const {sendmail}=require("../Config/mail")
const FileUpload=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:2
    },
    email:{
         type:String,
        required:true,
    },
    fileUrl:{
         type:String,
        required:true,
    }
})

FileUpload.post('save', function(doc) {
  console.log('%s has been saved', doc._id);
  try{

      sendmail(doc.email)
  }
  catch(error){
    console.log("error occured while sending mail",error)
  }

});

module.exports=mongoose.model("FileUpload",FileUpload)