/*
Vous connaissez le jeu du **Pendu** ? Aujourd'hui on va le coder en utilisant le module npm prompt ! Petit rappel des règles :

- Un mot mystère est proposé, chaque lettre est indiquée par un tiret bas `_`
- Le joueur a dix tentatives pour deviner le mot mystère, et pour chaque tentative il propose une lettre :
    - Si la lettre est dans le mot mystère, chaque lettre correspondante est affichée
    - Si la lettre n'est pas dans le mot, le message suivant s'affiche : "oups... plus que x chances !" (x sera remplacé par le nombre de tentatives restantes)
*/
const { doesNotReject } = require("assert");
const { map } = require("async");
const { message } = require("prompt");
const prompt = require("prompt");
const randomWord = require("./randomWord")
const misteryWord = randomWord.randomWord().split("");
prompt.start();

function pendu() {

    const misteryWord = randomWord.randomWord().split("");
    emptyArray = []
    for (let i = 0; i < misteryWord.length; i++) {
        emptyArray += "_";
        array = emptyArray.split("");
    }

    console.log(array);
    prompt.get([{
        name: console.log(misteryWord),
        description: "entrez UNE lettre",
        pattern: /^[a-zA-Z]{0,1}$/,
        message: "Entrez une seule lettre"
    }], function(err, res) {
        if (err) {
            return console.log("Something went wrong!", err)
        }
        console.log(res)
        misteryWord.map(function(letter) {
            for (let o = 0; o < array.length; o++) {
                if (array[o] === res) {
                    console.log("okok")
                }
            }

        })
    })


}
pendu()