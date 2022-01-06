function multiple(numb1) {
    //guard
    if (!process.argv[2] === undefined) {
        //corps de fonction
        let numb = parseInt(numb1),
            arrayOfNumb = [];

        for (let i = 1; i <= 10; i++) {
            arrayOfNumb.push(numb + i);
        }
        return arrayOfNumb;
        //erreur guard
    } else {
        return "Error";
    };
}

multiple(process.argv[2])