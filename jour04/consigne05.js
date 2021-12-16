// Exercice 5

/*## 05 - Add Up

- Créez une fonction `addUp` qui reçoit un paramètre `num`
- À l'aide d'une boucle, ajouter les chiffres de 1 à `num`
- Appelez votre fonction avec le chiffre 12 et vérifiez que vous obtenez 78*/

let count = 0;

function addUp(num) {
    for (let i = 1; i <= num; i++) {
        count = count + i
        console.log(count)
    }
};
addUp(12);