const express = require('express')
const app  = express()

app.get('/',(req,resp)=>{
    resp.send('<h1>Routing</h1>')
})


app.listen(8020,()=>{
    console.log(`Server is running on http://localhost:8020`);
})