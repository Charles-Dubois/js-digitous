/*01 - Countries

À l'aide de l'url suivante : "[https://restcountries.eu/rest/v2/all](https://restcountries.eu/rest/v2/all)" :

- Créez un array vide `countriesNames`
- Créez une fonction `getCountries` pour récupérer les pays et stocker leurs noms dans l'array
- Afficher les noms des pays récupérés dans la console, séparés par un tiret
*/
const axios = require("axios");
let countriesName = [];

function getCountries() {
    axios.get("https://restcountries.com/v3.1/all").then(function(res) {

            countriesName = res.data.map(function(elem) {
                return elem.name.common
            })
            console.log(countriesName.join(" - "))

        })
        .catch(function(err) {
            return console.log("Une erreur est survenue dans la requete", err);
        })
};

getCountries();


/*
const axios = require("axios"),
    array = [];

function getCountries() {
    axios.get("https://restcountries.com/v3.1/all").then(function(res) {

        res.data.map(function(elem) {
            array.push(` - ${elem.name.common} - `);
        })
        return console.log(array);
    })

    .catch(function(err) {
        console.log("Une erreur est survenue dans la requete", err);

    })
};

getCountries();
*/