
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
var valid = 0;
var lengthCheck = false;
rl.question("Please enter your username... ", function(name) {
    console.log(`Welcome, ${name}, to the password validator tool.\n`);
    close(valid, lengthCheck);
});

function getPassword() {
    rl.question("Please enter your desired password... ", function(password) {
        let specialArray = ["!", '@', '#', '$', '%', '^', '&', '*'];
        for(let i = 0; i < specialArray.length; i++) {
            if(password.includes(specialArray[i])) {
                valid += 1;
            }
        }
        if(password.length >= 10) {
            if(valid > 0) {
                console.log('Your password meets all required criteria! Thank you!\n');
                lengthCheck = true;
            }
            else {
                console.log('Your password is long enough, but still needs at least 1 special character (!, @, #, $, %, ^, &, *) in order to be valid.\n');
            }
        }
        else {
        console.log('Your password needs to be at least 10 characters long and include at least 1 special character in order to be valid.\n');
        }
        close(valid, lengthCheck);
    });
}

function close(validity, lengthCheck) {
    if(validity == 0 || lengthCheck == false) {
        valid = 0;
        getPassword();
    }
    else {
        console.log('Thanks for visiting!');
        rl.close();
    }
}
