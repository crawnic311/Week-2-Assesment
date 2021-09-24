
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
var valid = 0;
var lengthCheck = false;
rl.question("Please enter your username...", function(name) {
    console.log(`Welcome, ${name}, to the password validator tool.`);
    close(valid, lengthCheck);
});

function getPassword() {
    rl.question("Please enter your desired password...", function(password) {
        let specialArray = ["!", '@', '#', '$', '%', '^', '&', '*'];
        for(let i = 0; i < specialArray.length; i++) {
            if(password.includes(specialArray[i])) {
                valid += 1;
            }
        }
        if(password.length >= 10) {
            if(valid > 0) {
                console.log('Your password meets all required criteria! Thank you!');
                lengthCheck = true;
            }
            else {
                console.log('Your password needs at least 1 special character (!, @, #, $, %, ^, &, *) to be valid.');
            }
        }
        else {
        console.log('Your password needs to be at least 10 characters long and include at least 1 special character to be valid.');
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
       


/*
rl.on(valid, function() {
    if(valid) { 
        rl.question("Please enter your password again");
    }
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

/*
var password = "Smouds311*"
let specialArray = ["!", '@', '#', '$', '%', '^', '&', '*'];
let valid = 0;
for(let i = 0; i < specialArray.length; i ++) {
    if(password.includes(specialArray[i])) {
        valid += 1;
    }


}

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








