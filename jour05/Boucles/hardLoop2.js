/*
### 02 - Max

Créez un tableau vide `numbers`

à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 50 et 200 dans votre tableau

à l'aide d'une autre boucle for, trouvez le maximum des éléments de votre tableau (sans utiliser la fonction)
*/

let numbers = [];

for (let i = 1; i <= 50; i++) {

    numbers.push(Math.floor(Math.random() * (201 - 50) + 50));
}
console.log(numbers)
let maximum = 0;
for (let i = numbers.length; i >= 0; i--) {
    if (numbers[i] < numbers[0]) {
        maximum = numbers[0];
        numbers.pop();
    } else if (numbers[i] > numbers[0]) {
        maximum = numbers[i];
        numbers.shift();
    }
}
console.log(maximum);