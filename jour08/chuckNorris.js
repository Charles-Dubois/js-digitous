/*
## 02 - Chuck Norris

À l'aide de l'api suivante (lisez bien la documentation) :
[https://api.chucknorris.io/](https://api.chucknorris.io/)

- Créez une fonction `getFact` qui récupèrera une blague Chuck Norris aléatoire à chaque fois que la fonction est lancée, et qui l'affichera dans la console
*/

const axios = require("axios");

function getFact() {
    axios.get("https://api.chucknorris.io/jokes/random").then(function(res) {
        console.log(res.data.value);
    })
}

getFact();