import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({
    customer_id:{
        type:String,
        required:true,
    },
    product_id:{
        type:String,
        required:true 
    },
    quantity:{
        type:Number,
        required:true,
    },
    orderDate:{
        type:Date,
        default:Date.now()
    }
});

const order=mongoose.model('order',orderSchema);
export default order;