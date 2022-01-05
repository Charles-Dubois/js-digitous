/*
## 01 - Calculator

- Créez une fonction `calculate` qui recevra trois paramètres (deux nombres entiers et un opérateur `+`, `-`, `x`, `/` ou `%`)
- Créez une condition (méthode au choix) pour chaque valeur possible de l'opérateur qui retournera le résultat du calcul
- Affichez le résultat dans la console (vérifiez que pour les arguments `5`, `x` et `4` vous obtenez bien `20`)
- Vous devrez donner les arguments dans le terminal en appelant le programme alors attention aux paramètres !
    
    ⇒ Si vous ne donnez pas trois arguments, le programme doit afficher "error" dans la console
*/


function calculate(number1, operator, number2) {
    // guard
    if (process.argv[2] && process.argv[3] && process.argv[4] !== undefined || null) {

        // calculs


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
    }
    // message d'erreur du guard
    else {
        return console.log("error")
    }
}
calculate(process.argv[2], process.argv[3], process.argv[4])