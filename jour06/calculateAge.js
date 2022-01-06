/*
## 02 - Age

- Créez une fonction `calculateAge` qui reçoit en paramètre une date au format string (qui sert de date de naissance)
- La fonction doit calculer l'âge de la personne (en années) née a ce moment là, en fonction de la date d'aujourd'hui
- Appelez la fonction et affichez son résultat dans la console
*/

function calculateAge(str) {
    const birthDay = new Date(str).getFullYear(),
        now = new Date().getFullYear();


    return now - birthDay;
}

console.log(calculateAge("1996-07-22"));