// Exercice 3
/*## 03 - Even

- Créez une fonction `checkIfEven` qui reçoit un paramètre `num`
- Dans la fonction, à l'aide d'une condition, affichez "even" si `num` est pair, "odd" si il est impair
- Appelez votre fonction plusieurs fois avec des chiffres différents comme argument pour vérifier les résultats*/

function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("odd")
    } else {
        console.log("even")
    }
};

checkIfEven(4);
checkIfEven(3852749859824702);
checkIfEven(2847982347);