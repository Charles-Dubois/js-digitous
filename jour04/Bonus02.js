// Bonus 2
/* Bonus II

- Créez une fonction `launchDice` qui reçoit un paramètre `numberOfDice`
- La fonction va lancer aléatoirement des dés, une quantité de fois égale à la valeur de `numberOfDice` et retourner leur somme
- Appelez la fonction deux fois avec pour argument 5, une fois pour un `joueur1` et l'autre pour le `joueur2`.
- Comparez les valeurs des deux joueurs et Affichez le joueur gagnant (celui ayant le plus grand score)*/


const dice = [1, 2, 3, 4, 5, 6];
let count = 0;

function launchDice(numberOfDice) {
    for (let i = 0; i < numberOfDice; i++) {
        let diceResult = dice[Math.floor(Math.random() * 6)]
        count += diceResult
    }
    // console.log(count)
    return numberOfDice
}
let result1 = launchDice(9)
let joueur1 = {
    joueur: 1,
    score: launchDice(3)
}
console.log(result1)






























// function players(numberOfGame) {
//     let joueur1 = {
//         joueur: 1,
//         score: launchDice(numberOfGame)
//     };
//     let joueur2 = {
//         joueur: 2,
//         score: launchDice(numberOfGame),
//     };
//     if (joueur1["score"] < joueur2["score"]) {
//         console.log("joueur2")
//     } else if (joueur1["score"] = joueur2["score"]) {
//         console.log("égalité")
//     } else {
//         console.log("joueur1")
//     }
// };


// players(4)