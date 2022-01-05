/* ### 01 - Sum

Créez un tableau vide `numbers`

à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 0 et 100 dans votre tableau

à l'aide d'une autre boucle for, calculez la somme des éléments de votre tableau */

let numbers = [];

for (let i = 1; i <= 50; i++) {

    numbers.push(Math.floor(Math.random() * 101));
}
console.log(numbers);

let countNumbers = 0;
for (i = 0; i < numbers.length; i++) {
    countNumbers += numbers[i];
}
console.log(countNumbers);