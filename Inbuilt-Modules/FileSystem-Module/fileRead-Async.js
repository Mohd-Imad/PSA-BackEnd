const fs = require('fs')

fs.readFile('abc.txt','utf8',(a,b)=>{
    if(a) throw a
    console.log(b);
    
})