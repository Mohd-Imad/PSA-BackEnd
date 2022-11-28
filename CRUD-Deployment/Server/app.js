const express = require('express')
const axios = require('axios')
const app = express();

//Middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Getting Express API"
    })
})


app.post('/products', async (req, res) => {
    const { email } = req.body
    try {
        const insertNewProduct = await (await axios.post(`http://localhost:27001/products`, {
            email: email
        })).data
        // if (Array.isArray(insertNewProduct) && insertNewProduct.length > 0)

        // // res.status(200).json({
        // //     message : "Creating Express API",
        // //     data : req.body
        // // })

        // else res.status(404).json({
        //     message: "Request successfully, but no products inserted " 
        // })
        res.status(201).json({
            message: "New product added successfully",
            product: insertNewProduct
        })
    // // console.log(req.body);
    }
    catch (err) {
        res.status(400).json({
            message: err.message,

        })
    }
})


app.listen(8001, () => {
    console.log(`Server is running on http://localhost:8001`);

})