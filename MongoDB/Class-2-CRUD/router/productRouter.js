import express from 'express'
const router = express.Router()


router.get('/',(req,resp)=>{})
/*
    URL:localhost:8030/product/create
    Method: POST
    Fields:name, price, qty
*/
router.post('/create',async(req,resp)=>{
    try{
        //reading data from form{
        let product = {
            name : req.body.name,
            name : req.body.name,
            price : req.body.price,
        }
    }
    catch(err){

    }
})
router.put('/',(req,resp)=>{})
router.delete('/',(req,resp)=>{})

export default router