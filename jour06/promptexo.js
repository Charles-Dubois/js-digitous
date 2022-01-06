/*
## 03 - Validator

- À l'aide du package `prompt`, créez une fonction `checkProfile` qui demande à l'utilisateur un email, un username et un mot de passe
- La fonction vérifiera que l'utilisateur a saisi des informations valides (regardez la doc, et plus precisement les `pattern`) :
    - l'email doit être au bon format
    - le username ne doit comporter que des lettres, chiffres et tirets (les petits)
    - le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets
- Si tout est bon, elle retourne "All good !", sinon elle retourne "error"
*/


const prompt = require("prompt");

const conditions = {

    properties: {
        email: {
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Email invalid',
            required: true
        },
        username: {
            pattern: /^[a-zA-Z\s\-]+$/,
            message: 'le username ne doit comporter que des lettres, chiffres et tirets (les petits)',
            required: true
        },
        password: {
            pattern: /^[a-zA-Z0-9 ._-]{6,}$/,
            // hidden: true
            message: "le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets",
            required: true
        }
    }
};

prompt.start();

function checkProfile() {
    prompt.get(conditions, function(err, res) {

        console.log("All is good")
    })
};
checkProfile();