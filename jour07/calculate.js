/*
## 01 - Calculator

- Créez une fonction `calculate` qui recevra trois paramètres (deux nombres entiers et un opérateur `+`, `-`, `x`, `/` ou `%`)
- Créez une condition (méthode au choix) pour chaque valeur possible de l'opérateur qui retournera le résultat du calcul
- Affichez le résultat dans la console (vérifiez que pour les arguments `5`, `x` et `4` vous obtenez bien `20`)
- Vous devrez donner les arguments dans le terminal en appelant le programme alors attention aux paramètres !
    
    ⇒ Si vous ne donnez pas trois arguments, le programme doit afficher "error" dans la console
*/


function calculate(number1, operator, number2) {
    if ((number1 !== null || undefined) && (operator !== null || undefined) && (number2 !== null || undefined)) {

        if (operator === "+") {
            return console.log(number1 + number2)
        } else if (operator === "-") {
            return console.log(number1 - number2)
        } else if (operator === "x" || "*") {
            return console.log(number1 * number2)
        } else if (operator === "/") {
            return console.log(number1 / number2)
        } else if (operator === "%") {
            return console.log(number1 % number2)
        }
    } else { return console.log("error") }
}

calculate(5, "x", 4)