//Routing and Developing API's using Express Module and Morgan Module

const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const app = express()

dotenv.config({path:'./config/.env'})

let port = process.env.PORT 
let host_name = process.env.HOST_NAME 
console.log(port,host_name);

app.use(morgan('tiny'))       //to get logger information (route address)

//API's
app.get('/',(req,resp)=>{
    resp.send("This is Route Path")
})
app.get('/user',(req,resp)=>{
    resp.send("Display Single User")
})
app.get('/user/all',(req,resp)=>{
    resp.send("Display all Users")
})
app.post('/user/add/',(req,resp)=>{
    resp.send("Creating new User")
})
app.put('/user/update',(req,resp)=>{
    resp.send("Updating User")
})
app.delete('/user/delete',(req,resp)=>{
    resp.send("Delete User")
})

app.listen(port,host_name,(err)=>{
    if(err) throw err
    console.log(`Server is running on http://${host_name}:${port}`);
    
})