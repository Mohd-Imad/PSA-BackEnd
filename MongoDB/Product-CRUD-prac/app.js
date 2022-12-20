import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

dotenv.config({path:'./Config/.env'})

app.use(morgan('common'))
app.use(cors())

app.get('/',(req,resp)=>{
    resp.send("<h1>Express Product CRUD</h1>")
})

let port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})