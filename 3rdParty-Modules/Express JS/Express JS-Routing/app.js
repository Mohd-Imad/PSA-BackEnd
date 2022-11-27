const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const app = express()

dotenv.config({path:'./config/.env'})
let port = process.env.PORT 

app.use(morgan('tiny'))
app.use('/user',require('./userRouter'))

app.listen(port,(err)=>{
    if(err) throw err
    console.log(`Server is running on http://localhost:${port}`);
    
})