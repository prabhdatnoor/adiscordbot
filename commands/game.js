const Discord = require('discord.js');
//var j = ['bruh', 'yes', 'okay', 'jheez', 'bama', 'dolores', 'julian', 'b', 'a', 'b', '1'];
const shuffle = require('../my_functions/shuffle.js');
const getMembers = require('../my_functions/getMembers.js');
const game_config = require('../my_configs/team_gen.json');
const toEmbed = game_config.main.convertembed;
const lsort = game_config.main.sortleftovers;
const dTeams = game_config.byteam.default_no_of_teams;

module.exports = {
    name: 'game',
    description: 'randomizes teams. Default no. of teams is 2.',
    aliases: ['teams', 'team', 'groups', 'group', 'rtg'],
    execute(message, args) {

        var j = getMembers(message);

        console.log(j);

        /*if (args[0] === 'byteams') {//will add soon
            dTeams = args[1];
        }*/

        if (j.length >= 2) {
            var embed = new Discord.MessageEmbed()
                .addFields(byteams(j, dTeams, toEmbed, lsort))
                .setTitle('Groups are Made!')
                .setColor('RANDOM');

            message.channel.send(embed);
        } else {
            message.channel.send('Need at least 2 ppl fam');
        }

    }
};

function byteams(people, teams, isEmbed, sortleftover) {

    var ppl_per_team = Math.floor(people.length / teams);

    var leftover = people.length % teams;

    shuffle(people);

    var output = {};

    for (var i = 0; i < teams; i++) {
        output['Team ' + (i + 1)] = people.splice(0, ppl_per_team);
    }

    if (leftover > 0 && people.length > 0 && sortleftover === true) {
        var i = 0;
        do {
            output['Team ' + (i + 1)].push(people.splice(0, 1)[0]);

            i++;
        }

        while (i < teams && people.length > 0);
    }

    if (isEmbed === true) {
        //console.log('yes');
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