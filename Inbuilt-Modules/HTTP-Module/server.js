//Routing in Node JS (html pages)

const http = require('http')
const fs = require('fs')
const dotenv = require('dotenv')
const path = require('path')

let configPath = path.join(__dirname,'config','.env')

dotenv.config({path:configPath})

let port = process.env.PORT
let host_name = process.env.host_name

// console.log(port,host_name);

let server = http.createServer((req,resp)=>{
    let url = req.url
    resp.writeHead(200,{"Content-Type":"text/html"})
    console.log(url);
    
    if(url == "/"){
        fs.readFile('./views/index.html','utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    else if(url == "/about"){
        fs.readFile('./views/about.html','utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    else if(url == "/about"){
        fs.readFile('./views/about.html','utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    else if(url == "/contact"){
        fs.readFile('./views/contact.html','utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    else{
        resp.writeHead(404,{"Content-Type":"text/html"})
        resp.end("<h2>404! Error...Page not found</h2>")
    }
})

server.listen(port,(err)=>{
    if(err) throw err
    console.log(`Server is running on http://${host_name}:${port}`);
})