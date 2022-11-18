const fs = require('fs')


let newData = 'Writing some content in xyz text file Synchronously'
fs.writeFileSync('xyz.txt', newData, 'utf-8')          /*xyz.text--creates new file/update this file, newData---the data to add, utf-8---format */
    console.log(newData);
    