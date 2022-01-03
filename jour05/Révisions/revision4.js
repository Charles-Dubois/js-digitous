/* - Créez une fonction `swap` qui reçoit une string en paramètre
- La fonction retourne une string avec la casse inverse : une majuscule deviendra minuscule et vice-versa
- Appelez votre fonction avec l'argument "Hello World" et vérifiez que vous obtenez "hELLO wORLD"
*/

let character = "",
    sentence = "",
    i = 0;

function swap(string) {
    while (i <= string.length) {
        character = string.charAt(i);
        if (character === character.toUpperCase()) {
            character.toUpperCase();
        } else if (character === character.toLowerCase()) {
            character.toLowerCase();
        }
        i++
        sentence += character
    }
    console.log(sentence)
}



swap("AD ke Ade")