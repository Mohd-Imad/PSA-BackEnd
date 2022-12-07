import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import chalk from 'chalk'
import mongoose from 'mongoose'

const app = express()

dotenv.config({path : './Config/.env'})

app.use(cors()) //to enable client access
app.use(morgan('short')) //http logger

//to read form data
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//route request
app.get('/',(req,resp)=>{
    resp.send("<h1>Learning CRUD operations using Node JS and Mongo DB</h1>")
})

const port = process.env.PORT 
const host = process.env.HOST_NAME

app.listen(port,host,()=>{
    console.log(chalk.yellow(`Server is running on http://${host}:${port}`));
    console.log(chalk.yellow(`Server is running on http://localhost:${port}`));
})