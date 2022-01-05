/*
Bonus III
- Que retourne votre fonction de l'exercice 2 si vous lui passez autre chose que des x ou des o ? ou des X et O majuscules ?
- Rajoutez un message d'erreur explicite dans le premier cas et comptez les majuscules dans le second.
*/



// déclaration de fonction et variables
function countEach(string) {
    let count = string.split(""),
        numberX = 0,
        numberO = 0,
        upperO = 0,
        upperX = 0;
    // boucle for parcours le parametre transformé en array précedement, compte le nombre de x et o ainsi que les minuscules
    for (i = 0; i < count.length; i++) {
        if (count[i] === "x" || (count[i] === "X")) {
            numberX += 1;
            if (count[i] === "X") {
                upperX += 1;
            }
        } else if ((count[i] === "o") || (count[i] === "O")) {
            numberO += 1;
            if (count[i] === "O") {
                upperO += 1;
            }
        }
    }
    // affiche un message d'erreur si un autre caractère que x ou o est entré
    // affiche l'array et true si le nombre de x et de o sont égaux
    // affiche l'array et false si le nombre de x et de o sont différents
    // affiche le nombre de majuscule
    if ((numberX + numberO) < (count.length)) {
        console.log("Message d'erreur explicit !")
    } else if (numberX === numberO) {
        console.log(count);
        console.log(true);
        if (upperX + upperO >= 1) {
            console.log(upperX + upperO);
        }
    } else if (numberX !== numberO) {
        console.log(count);
        console.log(false);
        if (upperX + upperO >= 1) {
            console.log(upperX + upperO);
        }
    }
}

countEach("XOXOXO");