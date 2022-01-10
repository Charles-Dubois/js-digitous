/*## 02 - XOXO

- Créez une fonction `countEach` qui reçoit une string contenant des x et des o en paramètre
- La fonction retourne true si il y a autant de x que de o, sinon elle retourne false
- Vérifiez que l'argument "xxxoooox" déclenche un true, et que "xox" déclenche un false
*/

function countEach(string) {
    let count = string.split(""),
        numberX = 0,
        numberO = 0;
    console.log(count)
    for (i = 0; i < count.length; i++) {
        if (count[i] === "x") {
            numberX += 1;
        } else if (count[i] === "o") {
            numberO += 1;
        }
    }
    if (numberX === numberO) {
        console.log(true)
    } else { console.log(false) }

}

countEach("xoxoo");