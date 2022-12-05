import express from 'express'

const app = express()

app.get('/',(req,resp)=>{
    resp.send("<h1>Learning CRUD operations using Node JS and Mongo DB</h1>")
})

app.listen(8030,()=>{
    console.log(`Server is running on http://localhost:8030`);
})