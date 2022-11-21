// const http = require('http')
// const dotenv = require('dotenv')
// const fs = require('fs')

// dotenv.config({path:'./config/.env'})
// let PORT = process.env.PORT
// let Host_Name = process.env.HOST_NAME

// // console.log(PORT);
// // console.log(Host_Name);


// let server = http.createServer((request,response)=>{
//     response.writeHead(200,{'Content-Type':'text/html'})
//     // response.end("<h1>Hello,Good After Noon....Enjoy the day</h1>")
//     fs.readFile('./view/index.html','utf-8',(err,data)=>{
//         if(err) throw err
//         clg(data)
//         response.end(data)
//     })
// });
// server.listen(PORT,Host_Name,()=>{
//     console.log(`Server is running on......http://${Host_Name}:${PORT}`);
// })


const http = require('http')
const dotenv = require('dotenv')
const fs = require('fs')

dotenv.config({ path: './config/.env' })

let PORT = process.env.PORT
let host_Name = process.env.HOST_NAME

console.log(PORT)
let server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('./views/index.html', 'utf-8', (err, data) => {
        if (err) throw err;
        response.end(data)
    })

});
server.listen(PORT, host_Name, () => {
    console.log(`Server is running on http://${host_Name}:${PORT}`)
})