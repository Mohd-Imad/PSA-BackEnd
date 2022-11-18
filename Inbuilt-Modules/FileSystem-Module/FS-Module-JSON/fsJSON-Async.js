const fs = require('fs')

fs.readFile('emp.json','utf-8',(err,data)=>{
    if(err) throw err
    console.log(JSON.parse(data));       /*JSON.parse()---to convert JSON's string to object */
    fs.writeFile('users.json',data,'utf-8',(err)=>{
        if(err) throw err
        console.log(data);
    })
})