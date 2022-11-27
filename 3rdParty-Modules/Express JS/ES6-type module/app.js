// const express = require('express')  //ES5
import  express  from 'express'        //ES6
const app = express()

app.get('/',(req,resp)=>{
    resp.end("<h1>Express Server with ES6 syntax using type module</h1>")
})

app.listen(8001,()=>{
    console.log(`Server is running on http://localhost:8001`);
})