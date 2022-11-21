//Basic server creation and printing string in 8080 port in browser

const http = require('http')


let server = http.createServer((request, response) => {
    response.end("Creating  a server")
});

server.listen(8080, () => {
    console.log(`Server is running on ...8080`)
})