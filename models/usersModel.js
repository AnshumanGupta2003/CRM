import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    profileName:{
        type:String,
        required:true,

    },
    username:{
        type: String,
        required:true,
    unique:true,
    lowercase:true,
    },
    email:{
         type:String,
         required:true,
         unique:true,
         lowercase:true,
    },
    password:{
        type:String,
        required:true,
        minlength: 6,
        select:false,
    }, 
    phoneNumber:{
        type:String,
        required:true,
    }, 
    status:{
        type:String,
        enum:['active','inactive'],
        default:'active',
    },
    role:{
        type:String,
        enum:['Employee','TG','Sales'],
        default:'Employee',
    },
    
},
{ timestamps: true }
);

export default mongoose.model("User", userSchema);