module.exports = (teams) => {
    var embed = [];
    //console.log('EMBED');
    //console.log(teams);

    for (var i = 0; i < Object.keys(teams).length; i++) {
        embed[i] = { name: Object.keys(teams)[i], value: Object.values(teams)[i], inline: true };
        //console.log(embed[i]);
    }

    return embed;

}

function nice(bruh) {
    var embed = [];
    // console.log('EMBED');
    //console.log(teams);

    for (var i = 0; i < Object.keys(teams).length; i++) {
        embed[i] = { name: Object.keys(teams)[i], value: Object.values(teams)[i], inline: true };
        console.log(embed[i]);
    }

    return embed;
}