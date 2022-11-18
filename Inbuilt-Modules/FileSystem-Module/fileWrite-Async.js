const fs = require('fs')


let newData = "Writing Data in test.txt file Asynchronously"
fs.writeFile('test.txt', newData, 'utf8', (err)=>{            /*for writing file data arg no need */
    console.log('one');
    if(err) throw err
    console.log('two');
    
    console.log(newData); 
})

console.log('three');

/*here the execution takes place asynchronously, so the o/p 'll be --- three, one, two */