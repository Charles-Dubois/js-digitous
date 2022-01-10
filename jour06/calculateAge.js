/*
## 02 - Age

- Créez une fonction `calculateAge` qui reçoit en paramètre une date au format string (qui sert de date de naissance)
- La fonction doit calculer l'âge de la personne (en années) née a ce moment là, en fonction de la date d'aujourd'hui
- Appelez la fonction et affichez son résultat dans la console
*/
// Import de la fonction de l'exercice précedent
const formatDate = require("./formatDate");

function calculateAge(str) {
    // mise au format "dd/mm/aaaa" grace a la fonction importée
    const birthDay = new Date(str).getFullYear(),
        now = new Date().getFullYear(),
        // selection des jours et des mois de la date de naissance
        birthMonthDay = [
            birthMonth1 = formatDate.formatDate(str).charAt(3).toString(),
            birthMonth2 = formatDate.formatDate(str).charAt(4).toString(),
            birthDay1 = formatDate.formatDate(str).charAt(0).toString(),
            birthDay2 = formatDate.formatDate(str).charAt(1).toString()

        ]
        // selection des jours et des mois de la date actuelle
    nowMonthDay = [
            nowMonth1 = formatDate.formatDate(now).charAt(3).toString(),
            nowMonth2 = formatDate.formatDate(now).charAt(4).toString(),
            nowDay1 = formatDate.formatDate(now).charAt(0).toString(),
            nowDay2 = formatDate.formatDate(now).charAt(1).toString()
        ]
        // création de l'année d'anniversaire + 1 au cas ou l'anniversaire n'est pas encore passé dans l'année en cours
    waitingBirthDay = birthDay + 1,
        // concataination et transfomation en Number des jours et des mois selectionnées précedement
        nowParsed = parseInt(nowMonthDay.join()),
        birthParsed = parseInt(birthMonthDay.join());
    // Comparaison entre la date actuelle et l'anniversaire indépendement de l'année 
    if (birthParsed >= nowParsed) {
        // retourne le resultat de l'age de la personne à une année donné -1 si son anniversaire n'est pas arrivé

        console.log(nowMonthDay)
        console.log(nowMonth1)
        console.log(birthDay)
        return now - waitingBirthDay;
    }
    //retourne l'age de la personne à une année donné
    return now - birthDay;
}

console.log(calculateAge("1990-03-01"));