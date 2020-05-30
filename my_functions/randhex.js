const shuffle = require('./shuffle.js');

const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

module.exports = () => {

    shuffle(hex);
    var hexcode = "";

    //console.log(hex.slice(1, 7));
    hex.slice(1, 7).forEach(element => {
        hexcode += element;
    });

    return '#'.concat(hexcode);
}

/*function shufflehex() {
    var hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    shuffle(hex);

    var hexcode = "";
    console.log(hex.slice(1, 7));
    hex.slice(1, 7).forEach(element => {
        hexcode += element;
    });

    return '#'.concat(hexcode);
}
console.log(shufflehex());*/