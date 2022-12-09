import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import chalk from 'chalk'
import mongoose from 'mongoose'
import productRouter from './router/productRouter.js'

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

//configure product/user routes
app.use('/product',productRouter)

const port = process.env.PORT 
const host = process.env.HOST_NAME

//Connecting Mongo DB
const mongo_url = process.env.MONGO_DB_LOCAL_URL
mongoose.set('strictQuery', true)    
mongoose.connect(mongo_url)
    .then((response)=>{
    console.log(`Mongo DB Connected Successfully...!`);
    })
    .catch((err)=>{
        console.log(err);
        process.exit(1)    //to exit from node js
    })

app.listen(port,host,()=>{
    // console.log(`Server is running on http://${host}:${port}`);
    console.log(chalk.white(`Server is running on`,chalk.yellow.underline (`http://${host}:${port}`)));
})