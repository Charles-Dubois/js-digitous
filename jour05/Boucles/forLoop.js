/*  01 - Somme des carrés

Calculez la somme des carrés des nombres de 5 à 10

Rappel: le carré d'un nombre est sa valeur, multipliée par lui même. exemple: 5x5 = 25

Resultat attendu: 355 */

let count = 0;

for (let i = 5; i <= 10; i++) {
    count += i * i;
}
console.log(count);

/* ### 02 - Comptons

Comptez combien il y a de mutliple de 7 (pensez au modulo !) entre 100 et 1000

Résultat attendu: 128*/
let multiple = 0;
for (let i = 100; i <= 1000; i++) {
    let modulo = i % 7;

    if (modulo === 0) {
        multiple += 1
    }
};

console.log(multiple);

/* ### 03 - Chanceux

Lancez un dé 20 fois et affichez la somme de tout les résultats plus grand ou égale à 5 */


let randomCount = 0,
    randomNumber = 0;

for (let i = 1; i <= 20; i++) {
    randomNumber = Math.floor(Math.random() * 7);

    if (randomNumber >= 5) {
        randomCount += randomNumber;
    }
}
console.log(randomCount);


// ### 04 - Des boites

/* 
10 
34
17
29
error
*/

// ### 05 - Des setiob 

/* 78 
 error */

// 06 - Encore des boites

/*
0
2
-2
0
-2
-4
error
*/