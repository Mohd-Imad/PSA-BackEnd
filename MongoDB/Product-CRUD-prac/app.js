import express from 'express'

const app = express()

app.get('/',(req,resp)=>{
    resp.send("Express Product CRUD")
})

app.listen(8002,()=>{
    console.log(`Server is running on 8002`);
    
})