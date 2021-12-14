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
let test = 12
let bis = 5
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
console.log((testt == biss) + "ne pas utiliser");
console.log((testt != biss) + "ne pas utiliser");

//consigne 6

let limit = 50
let score = 64
if (limit >= score) {
    console.log("Ok good !")
} else { console.log("Oh nooo...") }

limit = 84
if (limit >= score) {
    console.log("Ok good !")
} else { console.log("Oh nooo...") }

// consigne 7

let password = "azerty"
if (password.length > 5) { console.log("The password is secure") }

// consigne 8




if (limit >= score && password.length > 5) {
    console.log("Everything is good")
} else if (limit >= score || password.length > 5) { console.log("Something is good") } else { console.log("Nothing is good") }