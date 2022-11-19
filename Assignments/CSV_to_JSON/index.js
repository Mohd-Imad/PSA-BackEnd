const csvtojson = require('csvtojson')
const fs = require('fs')

const csvfilepath = 'data.csv'

csvtojson()
.fromFile(csvfilepath)
.then((json)=>{
    console.log(json);
    fs.writeFile('output.json',JSON.stringify(json),'utf-8',(err,data)=>{
        if(err) throw err
    })
})