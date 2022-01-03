/* ### 01 - Sum

Créez un tableau vide `numbers`

à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 0 et 100 dans votre tableau

à l'aide d'une autre boucle for, calculez la somme des éléments de votre tableau */

let numbers = [];

for (i = 1; i <= 50; i++) {

    numbers.push(Math.floor(Math.random() * 101));
}
console.log(numbers);

let countNumbers = 0;
for (i = 0; i < numbers.length; i++) {
    countNumbers += numbers[i];
}
console.log(countNumbers);

/*
### 02 - Max

Créez un tableau vide `numbers`

à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 50 et 200 dans votre tableau

à l'aide d'une autre boucle for, trouvez le maximum des éléments de votre tableau (sans utiliser la fonction)
*/

let numbers1 = [];

for (i = 1; i <= 50; i++) {

    numbers1.push(Math.floor(Math.random() * (201 - 50) + 50));
}
console.log(numbers1)
let maximum = 0;
for (let i = numbers1.length; i >= 0; i--) {
    if (numbers1[i] < numbers1[0]) {
        maximum = numbers1[0];
        numbers1.pop();
    } else if (numbers1[i] > numbers1[0]) {
        maximum = numbers1[i];
        numbers1.shift();
    }
}
console.log(maximum);