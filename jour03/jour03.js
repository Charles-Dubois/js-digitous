// jour 3 
// consigne 1
/*- Créez une variable `fruits` qui contiendra un tableau avec les valeurs `"mango"`, `"lemon"` et `"blueberry"`
- Affichez `fruits` dans la console
- Bonus: essayez `console.table(fruits)`*/
const fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);
console.table(fruits);

//consigne 2
/*- Créez une variable `ingredients` qui contiendra un tableau avec les valeurs `"eggs"`, `"milk"` et `"butter"`
- Faites apparaître `"milk"` dans la console
- Faites apparaître l'index de `"butter"` dans la console*/

const ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

// consigne 3 
/*   - Créez une variable `objects` qui contiendra un tableau avec les valeurs `"pen"`, `"book"` et `"lamp"`
- Ajoutez `"chair"` au début du tableau puis affichez le résultat
- Enlevez `"lamp"` puis affichez le résultat
- Ajoutez `"laptop"` à la fin du tableau puis affichez le résultat
- Enlevez `"chair"` puis affichez le résultat    */

const objects = ["pen", "book", "lamp"];
objects.unshift("chair");
console.log(objects);
objects.pop();
console.log(objects);
objects.push("laptop");
console.log(objects);
objects.shift();
console.log(objects);

// consigne 4

/*- Créez une variable `numbers` qui contiendra un tableau avec les valeurs `4`, `10`, `8`, `12` et `6`
- Inversez l'ordre des éléments de `numbers` puis affichez le résultat
- Rangez les éléments de `numbers` dans l'ordre croissant puis affichez le résultat*/

const numbers = [4, 10, 8, 12, 6];
numbers.reverse();
console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(numbers);

//consigne 5
/*- Créez une variable `total` de valeur `0` et une variable `limit` de valeur `10`
- À l'aide d'une boucle for allant de`0` à `limit`, augmentez la valeur de `total` en lui ajoutant la valeur de `i` (i est l'index de votre boucle)
- Affichez la valeur de `total` après votre boucle, total doit valoir 55 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 */

let total = 0;
const limit = 10;
for (let i = 0; i <= limit; i++) {

    total = i + total

}
console.log(total);
//consigne 6

/*- Créez une variable `sentence` valant "Hello Konexio !"
- A l'aide d'une boucle for et sans utilisez la fonction .reverse(), faites en sorte d'afficher l'inverse de votre variable `sentence` ("! oixenoK olleH")*/

let sentence = "Hello Konexio !";
let reverseSentence = "";
for (let i = sentence.length - 1; i >= 0; i--) {
    reverseSentence = reverseSentence + sentence[i]
}
console.log(reverseSentence);

// bonus 1
/*- Si `i` est un multiple de 3 ⇒ affichez "fizz"
- Si `i` est un multiple de 5 ⇒ affichez "buzz"
- Si `i` est un multiple de 3 et 5 ⇒ affichez "fizzbuzz"
- Si `i` est un multilple de 7 ⇒ ne l'affichez pas
- Sinon, affichez la valeur de i */
let hundred = 100;
let goal = 1;
for (let i = 0; i <= hundred; i++) {

    if (i === 0) {
        console.log()
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz")
    } else if (i % 5 === 0) {
        console.log("buzz")
    } else if (i % 3 === 0) {
        console.log("fizz")
    } else if (i % 7 === 0) {
        console.log(null)
    } else { console.log(i) }
};

// bonus 2
//- Reproduisez l'exercice 5 avec une boucle while
/* Créez une variable `total` de valeur `0` et une variable `limit` de valeur `10`
- À l'aide d'une boucle for allant de`0` à `limit`, augmentez la valeur de `total` en lui ajoutant la valeur de `i` (i est l'index de votre boucle)
- Affichez la valeur de `total` après votre boucle, total doit valoir 55 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10*/

let totall = 0;
const limitt = 54;
let i = 0;
// let okey = 0
while (totall <= limitt) {
    totall = i + totall
    i++
}
console.log("bonus2",
    totall);