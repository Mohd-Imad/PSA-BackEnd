//Routing API for User Module

const express = require('express')
const router = express.Router()

router.get('/',(req,resp)=>{
    resp.send("<h1>User Routing...</h1>")
})
router.post('/login',(req,resp)=>{
    resp.send("<h1>Login Successful...</h1>")
})

module.exports = router