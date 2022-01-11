/*Installer axios
terminal : 
npm init -y
npm i axios
*/
const axios = require("axios");

/*
axios.get() recuperer des informations
axios.post() creer des informations
axios.put() mettre à jour des informations
axios.delete() supprimer des informations
*/
// axios.get prend en paramètre une url 
//endpoint = adresse url précise ex : http://google.com/about/staff
// restcountries pour se renseigner sur les pays
axios.get("https://restcountries.com/v3.1/al").then(function(res) {
        console.log(res.data)
    })
    .catch(function(err) {
        console.log("Une erreur est survenue dans la requete")

    });
// dans res = reponse du sevrveur
//catch permet de saisir les erreurs
// json placeholder fausse liste dutilisateur pour s'entrainer

/*
code assyncrone s'effectue en arrière plan, le reste du code s'effectue en parallele
*/