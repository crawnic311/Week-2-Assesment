
const { RSA_SSLV23_PADDING } = require('constants');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Please enter your username...", function(name) {
    console.log(`Welcome, ${name}, to the password validator tool.`);
    rl.question("Please enter your desired password...", function(country) {
        if(country.length >= 10 && country.includes('*')) {
           console.log('Your password meets all required criteria! Thank you!');
        }
        else {
        console.log('Your password does not meet all required creiteria.');
        }
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
/*
rl.question('Please enter your username...', function(name){
    //console.log(`Welcome, ${name}, to the password validator tool.`);
    rl.question('Please enter you password...'), function(password) {
        if(password.length >= 10) {
            console.log('Your password meets all of the required criteria! Thank you!');
        }
        else {
            console.log('Your password does not meet all of the required criteria.');
        }
    }

})

/*
rl.question('Please enter your password to validate...', function(password){
    if(password.length >= 10) {
        console.log('Your password meets all of the required criteria! Thank you!');
    }
    else {
        console.log('Your password does not meet all of the required criteria.');
    }
    rl.close();
})
*/









