//Routing API for User Module

const express = require('express')
const router = express.Router()

router.get("/",(req,resp)=>{
    resp.send("User Routing...")
})
router.post("/login",(req,resp)=>{
    resp.send("Login Successful...")
})

module.exports = router