module.exports = function(array) {
    var currentIndex = array.length;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // pick ran elem
        var randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // swap
        var temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}