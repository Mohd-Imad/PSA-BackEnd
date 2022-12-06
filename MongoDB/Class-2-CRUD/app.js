import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import chalk from 'chalk'

const app = express()

dotenv.config({path : './Config/.env'})
let port = process.env.PORT 
let host = process.env.HOST_NAME

//http logger
app.use(morgan('common'))

app.get('/',(req,resp)=>{
    resp.send("<h1>Learning CRUD operations using Node JS and Mongo DB</h1>")
})

app.listen(port,host,()=>{
    console.log(chalk.yellow(`Server is running on http://${host}:${port}`));
    console.log(chalk.yellow(`Server is running on http://localhost:${port}`));
})