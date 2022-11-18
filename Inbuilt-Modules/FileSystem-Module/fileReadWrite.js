const fs = require('fs')

fs.readFile('abc.txt','utf-8',(err,data)=>{
    if(err) throw err
    console.log("one");
    let newData = data + "add new content"
    fs.writeFile('test.txt',newData,'utf-8',(err)=>{
        if(err) throw err
        console.log(newData);  
        console.log("two");
    })
})
console.log("three");
    