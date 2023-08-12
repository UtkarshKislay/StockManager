import express from 'express';
import Product from '../modals/product.js';
const router=express.Router();

// POST /orders for creating a new order
// GET /orders/:id for retrieving an order by its ID
// GET /orders for retrieving all orders
// PUT /orders/:id for updating an order by its ID
// DELETE /orders/:id for deleting an order by its ID
router.get('/orders',async(req,res)=>{
    const { customerId, productId, quantity } = req.body;
    try{
      const allOrder=await Product.find({customerId:customerId});
      if(allOrder){
         return res.status(200).json(allOrder);
      }else{
        return res.status(201).json("Customer didn't order anything");
      }
    }catch(err){
        return res.status(500).json({message:err.message});
    }

});

router.get('/orders/:id',(req,res)=>{
    

});


router.post('/orders',(req,res)=>{

});

router.put('/orders/:id',(req,res)=>{

});

router.delete('/order/:id',(req,res)=>{

});



export default router;