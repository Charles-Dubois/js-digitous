/*- Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `2`, `3`, `4` et `5`
- Créez une variable `double` qui appellera la méthode `.map()` pour contenir les doubles des valeurs de `array`
- Affichez les valeurs de `double` dans la console
*/


const array = [1, 2, 3, 4, 5],
    double = array.map(function(num) {
        return num * 2
    });

console.log(array, double)

/*
03 - Map Names

- Créez une variable `longNames` contenant la valeur suivante :

[
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]
- Créez une variable `shortNames` qui appellera la méthode `.map()` pour contenir une version compacte de `longNames` :
[
	{
		name: "Jane Doe"
	},
	{
		name: "John Smith"
	}
]
*/
const longNames = [{
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
]
const shortNames = longNames.map(function(data) {
    return `name : ${data.firstName} ${data.lastName}`;
})
console.log(shortNames)