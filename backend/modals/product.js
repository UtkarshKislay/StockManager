import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    price:{
        type:mongoose.Types.Decimal128,
        required:true
    }
});

const product=mongoose.model('product',productSchema);
export default product;