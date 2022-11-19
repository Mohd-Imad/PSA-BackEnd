const bcrypt  = require('bcrypt')

let user = {
    email : "user123@gmail.com",
    password : "User@123",
    cc : "1234123412341234"
}


//Algorithm to convert user sensitive data to hashed format
let  salt = bcrypt.genSaltSync(10)
let new_email = bcrypt.hashSync(user.email,salt)
let new_password = bcrypt.hashSync(user.password,salt)
let new_cc = bcrypt.hashSync(user.cc,salt)

console.log(user.email);
console.log(new_email);
console.log(user.password);
console.log(new_password);
console.log(user.cc);
console.log(new_cc);



//Algorithm to compare the user sensitive data to hashed format---used while the same user login or password match
let pass = 'User123'
new_pass = bcrypt.hashSync(pass,salt)
let flag = bcrypt.compareSync('User123',new_pass)
console.log(flag);

if(flag){
    console.log('Login Succesfully...!');
}
else {
    console.log('Try again...!');
    
}


