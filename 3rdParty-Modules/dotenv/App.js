//Reading Application's confif details

const dotenv = require('dotenv')
const path = require('path')

let file = path.join(__dirname,'File','config','.env')
// dotenv.config({path : './File/config/.env'})            //direct path

dotenv.config({path:file})

console.log(process.env.PORT);                             //process.env--is an environment variable
console.log(process.env.SECRET_KEY);
console.log(process.env.HOST_NAME);
