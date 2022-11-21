//Routing in NodeJS Server

const http = require('http')

let server = http.createServer((request,response)=>{
    console.log(request.url);   /*without using url module only we can capture that what the user is entering in the address in url..Ex:localhost:8000/about */
    if(request.url == "/"){
        response.end('This is Home Page..........Hi Pandi Iam Imad, learning NODE JS Server')
    }
    else if(request.url == "/about"){
        response.end("This is About Us Page")
    }
    else if(request.url == "/contact"){
        response.end("This is Contact Page")
    }
    else{
        response.writeHead(404,{"Content-Type":"text/html"})   //here 404--
        response.end("<h1>404 Error! Page not found</h1>")
    }
})

server.listen(8000,'127.0.28.0',()=>{
    console.log("Server is running on......8000");
    
});
 