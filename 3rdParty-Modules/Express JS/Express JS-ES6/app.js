import express from 'express'
import chalk from 'chalk'

const app = express()

app.get('/',(req,resp)=>{
    resp.send("<h1>Hi this is ES6</h1>")
})


app.listen(8020,()=>{
    console.log(chalk.white(`Server is running on`,chalk.yellow.underline (`http://localhost:8020`)));
})