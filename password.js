
const { RSA_SSLV23_PADDING } = require('constants');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.userNamePrompt('Please enter your username...', function(name){
    console.log(`Welcome, ${name}, to the password validator tool.`);
    rl.close();
})

rl.passwordPrompt('Please enter your password to validate...', function(password){
    if(password.length >= 10) {
        console.log('Your password meets all of the required criteria! Thank you!');
    }
    else {
        console.log('Your password does not meet all of the required criteria.');
    }
    rl.close();
})












/*
do {let userName = prompt("Please enter your Username");
    if(userName != null) {
        welcomUser(userName)
    }
} 
while (userName == null);


function welcomUser(name) {
    console.log(`Welcome ${name} to the password validator tool`);
}
*/