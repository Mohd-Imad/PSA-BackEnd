const express = require('express')
const app = express();

//Middleware
// app.use(express.json());

function middleware1 (req, res, next){
    console.log("Middleware 1");
    next()
}

function middleware2(req, res, next){
    console.log("Middleware 2");
    next()
}

app.use(middleware1)
app.use(middleware2)

app.get('/',(req, res)=>{
    res.status(200).json({
        message : "Bla bla bla bla"
    })
})

app.listen(8001,()=>{
    console.log(`Server is running on http://localhost:8001`);
    
})