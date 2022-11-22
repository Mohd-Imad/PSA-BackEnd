//Routing and Developing API's using Express Module

const express = require('express')
const app = express()

app.get('/',(req,resp)=>{
    resp.send("This is Home Page...Express App")
})

app.get('/about',(req,resp)=>{
    resp.end("<h1>This is About Page...Express App")
})

app.listen(8080,(err)=>{
    if(err) throw err
    console.log(`Server is running on 8080`);   
})