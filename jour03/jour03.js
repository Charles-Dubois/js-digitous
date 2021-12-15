// jour 3 
// consigne 1
/*- Créez une variable `fruits` qui contiendra un tableau avec les valeurs `"mango"`, `"lemon"` et `"blueberry"`
- Affichez `fruits` dans la console
- Bonus: essayez `console.table(fruits)`*/
const fruits = ["mango", "lemon", "blueberry"]
console.log(fruits)
console.table(fruits)

//consigne 2
/*- Créez une variable `ingredients` qui contiendra un tableau avec les valeurs `"eggs"`, `"milk"` et `"butter"`
- Faites apparaître `"milk"` dans la console
- Faites apparaître l'index de `"butter"` dans la console*/

const ingredients = ["eggs", "milk", "butter"]
console.log(ingredients[1])
console.log(ingredients.indexOf("butter"))

// consigne 3 
/*   - Créez une variable `objects` qui contiendra un tableau avec les valeurs `"pen"`, `"book"` et `"lamp"`
- Ajoutez `"chair"` au début du tableau puis affichez le résultat
- Enlevez `"lamp"` puis affichez le résultat
- Ajoutez `"laptop"` à la fin du tableau puis affichez le résultat
- Enlevez `"chair"` puis affichez le résultat    */

const objects = ["pen", "book", "lamp"]
objects.unshift("chair")
console.log(objects)
objects.pop()
console.log(objects)
objects.push("laptop")
console.log(objects)
objects.shift()
console.log(objects)

// consigne 4

/*- Créez une variable `numbers` qui contiendra un tableau avec les valeurs `4`, `10`, `8`, `12` et `6`
- Inversez l'ordre des éléments de `numbers` puis affichez le résultat
- Rangez les éléments de `numbers` dans l'ordre croissant puis affichez le résultat*/

const numbers = [4, 10, 8, 12, 6]
numbers.reverse()
console.log(numbers)
numbers.sort((a, b) => a - b)
console.log(numbers)

//consigne 5
/*- Créez une variable `total` de valeur `0` et une variable `limit` de valeur `10`
- À l'aide d'une boucle for allant de`0` à `limit`, augmentez la valeur de `total` en lui ajoutant la valeur de `i` (i est l'index de votre boucle)
- Affichez la valeur de `total` après votre boucle, total doit valoir 55 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 */

let total = 0;
const limit = 10;
for (let i = 0; total <= limit; i++) {
    console.log(total)
    total = i

}

//consigne 6

/*- Créez une variable `sentence` valant "Hello Konexio !"
- A l'aide d'une boucle for et sans utilisez la fonction .reverse(), faites en sorte d'afficher l'inverse de votre variable `sentence` ("! oixenoK olleH")*/

let sentence = "Hello Konexio !"

let index = sentence.indexOf()

console.log(index)
    // for (let o = indexof(sentence); sentence = "! oixenoK olleH"; o++) { console.log(o) }