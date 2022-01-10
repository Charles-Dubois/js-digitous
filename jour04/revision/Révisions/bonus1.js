/*
## Bonus
- Créez une fonction `makeItSpongeBob` qui reçoit une string en paramètre
- La fonction retourne une string avec le même texte en alternant majuscule / minuscule
- Appelez votre fonction avec l'argument "Javascript is easy" et vérifiez le résultat
*/
let upper = "",
    lower = "",
    sentence = "";

function makeItSpongeBob(strings) {
    for (i = 0; i <= strings.length; i++) {
        if ((i % 2 === 0) || (i === 0)) {
            upper = strings.charAt(i).toUpperCase();
            sentence += upper;
        } else {
            lower = strings.charAt(i).toLowerCase();
            sentence += lower;
        }
    }
    console.log(sentence);
}
makeItSpongeBob("Javascript is easy");