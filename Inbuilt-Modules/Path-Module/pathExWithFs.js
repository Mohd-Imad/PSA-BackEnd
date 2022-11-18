const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname,'Files','JSON','emp.json'),'utf-8',(err,data)=>{
    if(err) throw err
    console.log(data);
    console.log(JSON.parse(data));
})