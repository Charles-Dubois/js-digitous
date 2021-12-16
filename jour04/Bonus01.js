// Bonus 1

/* Bonus

- Créez une fonction `generatePassword` qui reçoit un paramètre `num`
- La fonction génère un mot de passe aléatoire, avec autant de lettres que la valeur de `num`
- Le mot de passe contiendra uniquement des lettres majuscules
- Si `num` est plus petit que 6 ou plus grand que 15, la fonction retourne "error"*/

let myCharset = "AZERTYUIOPQSDFGHJKLMWXCVBN"
let password = ""
let length = myCharset.length

function generatePassword(num) {
    if (num < 6 || num > 15) {
        console.log("error")
    } else {
        for (let i = 0; i < num; i++) {
            password += myCharset.charAt(Math.floor(Math.random() * length));
        }
        console.log(password)
    }
}

generatePassword(6)