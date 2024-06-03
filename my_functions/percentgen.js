module.exports = (precision, range) => {
    if (precision === undefined || typeof precision !== 'number') {
        precision = 2;
    }

    if (range === undefined || typeof range !== 'number') {
        range = 100;
    }

    precision = Math.pow(10, precision);

    return Math.floor(Math.random() * (range * precision - 1 * precision) + 1 * precision) / (1 * precision);
}


function yes(precision, range) {
    if (precision === undefined || typeof precision !== 'number') {
        precision = 2;
    }

    if (range === undefined || typeof range !== 'number') {
        range = 100;
    }

    precision = Math.pow(10, precision);

    return Math.floor(Math.random() * (range * precision - 1 * precision) + 1 * precision) / (1 * precision);
}
//console.log(yes());