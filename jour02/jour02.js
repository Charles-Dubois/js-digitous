// exercice jour 2 JS

// consigne 1
let integer = 102;
let float = 13.9;

console.log(float + integer);

// consigne 2
let basic = 34;
let stringified = basic.toString();

console.log(stringified);

// consigne 3

let num = 1.5;
let rounded = Math.round(num);

console.log(rounded);

// consigne 4
let test = 12;
let bis = 5;

console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test % bis);
console.log(test ** bis);

// consigne 5

let testt = 143;
let biss = 219;

console.log(testt > biss);
console.log(testt < biss);
console.log(testt >= biss);
console.log(testt <= biss);
console.log(testt === biss);
console.log(testt !== biss);
console.log((testt == biss) + " ne pas utiliser");
console.log((testt != biss) + " ne pas utiliser");

//consigne 6

let limit = 50;
let score = 64;

if (limit >= score) {
    console.log("Ok good !")
} else { console.log("Oh nooo...") };

limit = 84;

if (limit >= score) {
    console.log("Ok good !")
} else { console.log("Oh nooo...") };

// consigne 7

let password = "azerty";

if (password.length > 5) { console.log("The password is secure") };

// consigne 8




if (limit >= score && password.length > 5) {
    console.log("Everything is good")
} else if (limit >= score || password.length > 5) {
    console.log("Something is good")
} else {
    console.log("Nothing is good")
};

// bonus 1
let random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

console.log(random);

if (random === 6) {
    console.log("Yes I win !")
} else {
    console.log("So close...")
};

// bonus 2
let month = "July";

switch (month) {
    case month = "January":
        console.log("Winter");
        break;
    case month = "Febuary":
        console.log("Winter");
        break;
    case month = "March":
        console.log("Spring");
        break;
    case month = "April":
        console.log("Spring");
        break;
    case month = "May":
        console.log("Spring");
        break;
    case month = "June":
        console.log("Summer");
        break;
    case month = "July":
        console.log("Summer");
        break;
    case month = "August":
        console.log("Summer");
        break;
    case month = "September":
        console.log("Fall");
        break;
    case month = "October":
        console.log("Fall");
        break;
    case month = "November":
        console.log("Fall");
        break;
    case month = "December":
        console.log("Winter");
        break;
}
// bonus 3

let roundedNumber = 12.3;
let parsedNumber = parseInt(roundedNumber);

if (roundedNumber - parsedNumber >= 0.5) {
    console.log(parsedNumber + 1)
} else {
    console.log(parsedNumber)
};
// partie 2 du bonus
let stringedNumber = roundedNumber.toString();
let index = stringedNumber.indexOf(".");

if (roundedNumber - parsedNumber <= 0.5) {
    console.log(stringedNumber.substring(0, index))
} else {
    console.log((parsedNumber + 1).toString())
};