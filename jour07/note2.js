/*
Map, reduce, filter sont des méthodes non mutatives
*/
// fonction Map va parcourir le tableau

const numbers = [1, 2, 3, 4, 5];

const doubles = numbers.map(function(num) {

        // map doit obligatoirement return
        return num * 2;
    })
    //console.log(numbers, doubles)

const user = [{ name: "nom1", age: 45 }, { name: "nom 2", age: 88 }, { name: "nom3", age: 23 }]

const htmlUser = user.map(function(users) {
        return `<p>${users.age}</p>`
    })
    // console.log(htmlUser)

// filter

const bigNumber = user.filter(function(users) {
    return users.age >= 18;
})
console.log(bigNumber);

// reduce

const reducing = numbers.reduce(function(acc, curr) {
    return acc + curr
})
console.log(reducing)