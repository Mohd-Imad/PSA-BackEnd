import express from 'express'
const router = express.Router()

router.get('/',(req,resp)=>{
    resp.end("<h1>This is GET Method using ES6 Syntax</h1>")
})
router.post('/',(req,resp)=>{
    resp.end("<h1>This is POST Method using ES6 Syntax</h1>")
})

export default router