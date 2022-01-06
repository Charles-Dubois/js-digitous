/*
- Créez une fonction `formatDate` qui reçoit en paramètre une string (au format aaaa-mm-jj)
- La fonction doit renvoyer la date au format jj/mm/aaaa
- Appelez la fonction et affichez son résultat dans la console
*/

function formatDate(str) {

    const date = new Date(str),
        years = date.getFullYear(),
        months = (date.getMonth() + 1).toString().padStart(2, '0'),
        days = date.getDate();
    return `${days}/${months}/${years}`

}
console.log(formatDate("1996-07-22"));