function countEach(string) {
    let count = string.split(""),
        numberX = 0,
        numberO = 0;
    console.log(count)
    for
    if ((count[i] === "x") || (count[i] === "X")) {
        if (count[i] === "x") {
            numberX += 1;
        } else if (count[i] === "o") {
            numberO += 1;
        }
    }
    if (numberX === numberO) {
        console.log(true)
    } else { console.log(false) }

}

countEach("xoxoo");




for (i = 0; i < count.length; i++) {
    if ((count[i] === "x") || (count[i] === "X")) {
        numberX += 1;
    } else if ((count[i] === "o") || (count[i] === "O")) {
        numberO += 1;
    }
}