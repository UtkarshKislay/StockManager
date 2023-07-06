import express from 'express';
const router=express.Router();


router.get('/order',(req,res)=>{
    const { customerId, productId, quantity } = req.body;
});





export default router;