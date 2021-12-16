// Exercice 6

/*## 06 - Time

- Créez une fonction `format` qui reçoit un paramètre `num` qui représente des secondes
- Faites en sorte que la fonction retourne un format `heures : minutes : secondes`
- Appelez votre fonction avec l'argument `3700` et vérifiez que vous obtenez `1:1:40`*/



function format(num) {
    let h = Math.floor(num / 3600).toString().padStart(2, '0'),
        m = Math.floor(num % 3600 / 60).toString().padStart(2, '0'),
        s = Math.floor(num % 60).toString().padStart(2, '0');

    console.log(h + ':' + m + ':' + s);
}

format(3100);