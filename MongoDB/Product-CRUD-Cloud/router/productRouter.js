import express from 'express'
import Product from '../model/Products.js'

const router = express.Router()

router.post('/create', async (req, resp) => {
    try {
        let new_product = {
            name: req.body.name,
            price: req.body.price,
            qty: req.body.qty
        }

        let product = await Product(new_product)
        console.log(product);

       product =  await product.save()
       resp.status(200).json({
        result : "Product Created Successfully....!",
        product : product
       })
    }
    catch(err){
        if (err) throw err
    }

    router.get('/all', async (req, resp) => {
        try {
            let products = await Product.find()
            resp.status(200).json(products)
        }
        catch (err) {
            resp.status(500).json({ msg: err.message})
        }
    })
    
})

export default router