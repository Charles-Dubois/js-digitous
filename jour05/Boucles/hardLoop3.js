/*
### 03 - Unique

Créez un tableau vide `numbers`

à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 50 et 200 dans votre tableau

à l'aide d'une boucle while affichez le premier élément de votre tableau superieur ou égal à 75 et inferieur ou égal à 100
*/

let numbers = [];

for (let i = 1; i <= 50; i++) {

    numbers.push(Math.floor(Math.random() * (201 - 50) + 50));
}
console.log(numbers);


let i = 0,
    goodNumber = 0;

while (i <= numbers.length) {

    if (numbers[i] <= 100 && numbers[i] >= 75) {
        goodNumber = numbers[i];
        console.log(goodNumber);
        break;
    }
    i++
};