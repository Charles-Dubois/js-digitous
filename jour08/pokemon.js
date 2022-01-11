/*
À l'aide de la superbe [PokeAPI](https://pokeapi.co/) (bien lire la documentation) :

- Créez une fonction `catchPokemon` qui recevra un nombre en paramètre 
(il correspondra à l'id d'un pokemon) et qui récupèrera le pokemon correspondant à cet id.
 Elle affichera ensuite dans la console : 

 id: xxx // remplacer xxx par l'id du pokemon
name: "xxx" // remplacer xxx par le nom du pokémon
*/

const axios = require("axios"),
    array = ["L'Index 0 n'est pas attribué"];


function catchPokemon(number) {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118").then(function(pokemon0to100) {
            //Stockage dans ma fonction array des pokemons
            pokemon0to100.data.results.map(function(pokemon) {
                    array.push(pokemon);
                })
                //conditions pour entrer un index de pokemon
                //guard
            if (number < 1 || number > 1118) {
                return console.log("Choisissez un nombre entre 1 et 1118")
            }
            return console.log(`index : ${number}
name : ${array[number].name}`)



            // Message d'erreur
        })
        .catch(function(err) {
            console.log("Une erreur est survenue dans la requete", err);

        })
}

catchPokemon(1112)