/*
## 04 - Filter Numbers

- Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `"toto"`, `34`, `"javascript"` et `8`
- Créez une variable `numbers` qui appellera la méthode `.filter()` pour contenir les **nombres** de `array`
- Affichez les valeurs de `numbers` dans la console
*/

const array = [1, "toto", 34, "javascript", 8],
    numbers = array.filter(function(num) {

        return Number(num);

    })
console.log(numbers);