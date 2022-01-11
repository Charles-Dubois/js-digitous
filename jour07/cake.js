const cakes = [{
            name: "cake",
            flavor: "vanilla",
            status: "available"
        },
        {
            name: "brownie",
            flavor: "chocolate",
            status: "available"
        },
        {
            name: "pie",
            flavor: "strawberry",
            status: "available"
        },
        {
            name: "muffin",
            flavor: "pistachio",
            status: "available"
        },
        {
            name: "donut",
            flavor: "chocolate",
            status: "available"
        },
    ]
    /*
    - À l'aide des méthodes `.filter()` et `.map()`, vous donnerez le statut "sold out !" aux gâteaux au chocolat
    */

const soldOut = cakes.filter(function(cake) {
    return cake.flavor === "chocolate";
}).map(function(sold) {
    sold.status = "sold out !";
    return sold;
})
console.log(soldOut);