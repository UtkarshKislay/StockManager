import express from 'express';
import fs from 'fs';
const router=express.Router();

router.get('/products',async(req,res)=>{
    const parms=req.query;
    const productPerPage=parseInt(parms.productPerPage);
    const pageNumber=parseInt(parms.page);
    const search=parms.searchProduct;
    fs.readFile('../backend/data/product.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        const products = JSON.parse(data);
        let finalProducts = products;
        if (search) {
            const searchProduct = products.filter((product) => {
                const productName = product.name.toLowerCase();
                const productCategory = product.category.toLowerCase();
                const searchTerm = search.toLowerCase();
                return productName.includes(searchTerm) || productCategory.includes(searchTerm);
            });
            finalProducts = searchProduct;
        }
        const startIndex = (pageNumber - 1) * productPerPage;
        const endIndex = startIndex + productPerPage;
        const pageProducts = finalProducts.slice(startIndex, endIndex);
        const lastPageNumber = parseInt((finalProducts.length + productPerPage - 1) / productPerPage);
        return res.json({ pageProducts, lastPageNumber });
    })
})


export default router;