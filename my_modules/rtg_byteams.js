const Discord = require('discord.js');
//var j = ['bruh', 'yes', 'okay', 'jheez', 'bama', 'dolores', 'julian', 'b', 'a', 'b', '1'];
const shuffle = require('../my_functions/shuffle.js');
const getMembers = require('../my_functions/getMembers.js');
const game_config = require('../my_configs/team_gen.json');
const toEmbed = game_config.main.convertembed;
const lsort = game_config.main.sortleftovers;

module.exports = function(message, teams) {

    var members = getMembers(message);

    if (!members) {
        return;
    } else if (members.length >= 2) {
        return byteams(members, teams, toEmbed, lsort);
    }

    return '<2';

}


function byteams(people, teams, isEmbed, sortleftover) {

    var ppl_per_team = Math.floor(people.length / teams);

    var leftover = people.length % teams;

    shuffle(people);

    var output = {};

    for (var i = 0; i < teams; i++) {
        output['Team ' + (i + 1)] = people.splice(0, ppl_per_team);
    }

    if (sortleftover === true) {
        var i = 0;
        do {

            output['Team ' + (i + 1)].push(people[i]);

            i++;
        }

        while (i < (teams - 1) && leftover > 0);
    }

    if (isEmbed === true) {
        return DisEmbed(output);
    } else {
        return output;
    }

}

function DisEmbed(teams) {

    var emb_out = [];

    var no_of_teams = Object.keys(teams).length;

    for (var i = 0; i < no_of_teams; i++) {

        emb_out[i] = { name: Object.keys(teams)[i], value: Object.values(teams)[i], inline: true };
    }

    return emb_out;
}