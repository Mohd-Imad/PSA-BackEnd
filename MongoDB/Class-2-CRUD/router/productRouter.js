import express from 'express'
import Product from '../model/Products.js'

const router = express.Router()

// router.get('/',(req,resp)=>{})
/*
    URL:localhost:8030/product/create
    Method: POST
    Fields:name, price, qty
*/
router.post('/create', async (req, resp) => {
    try {
        //reading data from form
        let new_product = {
            name: req.body.name,
            price: req.body.price,
            qty: req.body.qty,
        }
    
        //for avoiding existing product creation
        let product = await Product.findOne({ name: new_product.name })
        if (product) {
            return resp.status(401).json({ msg: "Product already exists...!" })
        }

          product = Product(new_product)
        console.log(product);

        product = await product.save()    //save to DB
        resp.status(200).json({
            result: "Product Created Successfully...!",
            product: product
        })
    }
    catch (err) {
        if(err) throw err
    }
})
// router.put('/',(req,resp)=>{})
// router.delete('/',(req,resp)=>{})

export default router