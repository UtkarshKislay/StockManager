import mongoose from "mongoose";

const customerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true 
    },
    address:{
        type:String,
        required:true 
    }
});

const customer=mongoose.model('customer',customerSchema);
export default customer;