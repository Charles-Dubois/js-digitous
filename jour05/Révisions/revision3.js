/*03 - Palindrome

- Créez une fonction `checkPal` qui reçoit une string en paramètre
- La fonction retourne "Palindrome !" si le mot se lit dans les deux sens, sinon elle retourne "Nope"
- Vérifiez que vous obtenez un positif avec l'argument "racecar" mais pas avec "laptop"*/

function chekPal(string) {
    const split = string.split("");
    let checkLetters = 0;
    for (let i = 0, o = split.length - 1; i < split.length; i++, o--) {

        if (split[i] === split[o]) {
            checkLetters += 1;
        }
    }
    if (checkLetters === split.length) {
        console.log("palindrome !");
    } else { console.log("Nope") }

}
chekPal("kayak");



/*
       
*/