// fonction addition
function addition(tableOfAddition) {
    //  Guard
    if (process.argv[2] !== undefined || null) {
        //corps de la fonction
        let resultOfTable = 0;
        tableOfAddition = parseInt(process.argv[2])
        for (i = 1; i <= 10; i++) {
            resultOfTable = tableOfAddition + i;
            console.log(resultOfTable);
        }
    }
    //message d'erreur du guard
    else {
        return console.log("Erreur, entrez un nombre entier !");
    }
}
addition(process.argv[2]);

module.exports = { addition };