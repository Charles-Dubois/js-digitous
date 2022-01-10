/* - Créez une fonction `swap` qui reçoit une string en paramètre
- La fonction retourne une string avec la casse inverse : une majuscule deviendra minuscule et vice-versa
- Appelez votre fonction avec l'argument "Hello World" et vérifiez que vous obtenez "hELLO wORLD"
*/

let finalString = "",
    lower = "",
    upper = "";

function swap(string) {
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === string.charAt(i).toLowerCase()) {
            lower = string.charAt(i).toUpperCase()
            finalString += lower
        } else if (string.charAt(i) === string.charAt(i).toUpperCase()) {
            upper = string.charAt(i).toLowerCase()
            finalString += upper
        }
    }
    console.log(finalString)
}
swap("Hello World");