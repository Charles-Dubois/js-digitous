/*  01 - Somme des carrés

Calculez la somme des carrés des nombres de 5 à 10

Rappel: le carré d'un nombre est sa valeur, multipliée par lui même. exemple: 5x5 = 25

Resultat attendu: 355 */

count = 0;

for (let i = 5; i <= 10; i++) {
    count += i * i
    console.log(count)
};