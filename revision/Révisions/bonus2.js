/*
- tester votre exercice 1 avec un mélange de lettres majuscules et minuscules. Est ce que cela fonctionne toujours ?
- si non corrigez le !
*/


function sortLetters(string) {
    function case_insensitive_comp(strA, strB) {
        return strA.toLowerCase().localeCompare(strB.toLowerCase());
    }
    let str = string.split("").sort();
    str = str.sort(case_insensitive_comp);
    str = str.join("");
    console.log(str);
}
sortLetters("KoNeXiO");