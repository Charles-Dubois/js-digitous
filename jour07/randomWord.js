function randomWord() {
    const words = ['farine', 'orange', 'voiture', 'espace', 'javascript', 'objectif'];
    const random = Math.random() * words.length | 0;
    const rWord = words[random];
    return rWord;
}

module.exports = { randomWord };