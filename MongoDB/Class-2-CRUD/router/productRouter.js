import express from 'express'
import Product from '../model/Products.js'

const router = express.Router()

/*
    URL:localhost:8030/products/create
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
        if (err) throw err
    }
})

/*
    URL:localhost:8030/products/product/:id
    Method: GET
    Fields:name, price, qty
*/
router.get('/product/:id', async (req, resp) => {
    try {
        let product_Id = req.params.id
        let product = Product.findById(product_Id)
        if (!product) {
            return resp.status(401).json({
                result: "No Product...!"
            })
        }
        product = await Product.findByIdAndDelete((product_Id))
        resp.status(200).json(product)
    }
    catch (err) {
        resp.status(500).json({ msg: err.message })
    }
})

/*
    URL:localhost:8030/products/all
    Method: GET
    Fields:name, price, qty
*/
router.get('/all', async (req, resp) => {
    try {
        let products = await Product.find()
        resp.status(200).json(products)
    }
    catch (err) {
        resp.status(500).json({ msg: err.message})
    }
})

/*
    URL:localhost:8030/products/update/:id
    Method: PUT
    Fields:name, price, qty
*/
router.put('/update/:id', async (req, resp) => {
    let product_Id = req.params.id
    console.log(product_Id);
    try {
        let updatedProduct = {
            name: req.body.name,
            price: req.body.price,
            qty: req.body.qty
        }
        let product = Product.findById(product_Id)
        if (!product) {
            return resp.status(401).json({ msg: "No Product Found...!" })
        }
        product = await Product.findByIdAndUpdate(product_Id, { $set: updatedProduct })
        resp.status(200).json({ result: "Product updated succesfully...!" }), { product: product }
    }
    catch (err) {
        resp.status(401).json({ msg: "No Product Found...!" })

    }
})

/*
    URL:localhost:8030/products/delete/:id
    Method: DELETE
    Fields:name, price, qty
*/
router.delete('/delete/:id', async (req, resp) => {
    try {
        let product_Id = req.params.id
        let product = Product.findById(product_Id)
        if (!product) {
            return resp.status(401).json({
                result: "No Product...!"
            })
        }
        product = await Product.findByIdAndDelete((product_Id))
        resp.status(200).json({
            result: "Product Deleted"
        })
    }
    catch (err) {
        resp.status(401).json({
            result: "No Product found...!"
        })
    }
})

export default router