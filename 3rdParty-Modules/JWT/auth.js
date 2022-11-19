//JWT-JSON Web Token, is used for authorization purpose
//once the user's details are sent to server, then the token for that user is created and stored in browser's local storage

const jwt = require('jsonwebtoken')

let user = {
    id : 101,
    name : 'Rahul',
    email : 'rahul@pm.com',
    password : 'rahulgandhiPM'
}

//part of data (user)
let payload = {
    id : user.id,
    email : user.email
}

let secret_Key = '123412341234'

//to generate token
let token = jwt.sign(payload,secret_Key,{expiresIn:60000})
console.log(token);

//to verify token
let user_Id = jwt.verify(token,secret_Key)
console.log(user_Id);
