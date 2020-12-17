const Discord = require('discord.js');
//var j = ['bruh', 'yes', 'okay', 'jheez', 'bama', 'dolores', 'julian', 'b', 'a', 'b', '1'];
const shuffle = require('../my_functions/shuffle.js');
const getMembers = require('../my_functions/getMembers.js');
const game_config = require('../my_configs/team_gen.json');
const dTeams = game_config.byteam.default_no_of_teams;
const blips = game_config.blips;
const byteams = require('../my_modules/rtg_byteams.js');

module.exports = {
    name: 'game',
    description: 'randomizes teams. Default no. of teams is 2.',
    aliases: ['teams', 'team', 'groups', 'group', 'rtg'],
    execute(message, args) {

	//get teams from the voice channel the person who sent
	//the message is in
        var teams = byteams(message, dTeams);

        if (!teams) {//if there is no one in channel, do nothing
            return;
        } else if (teams === '<2') {
            message.channel.send('Need atleast 2 ppl');
        }
	
	//send the embed message
        var embed = new Discord.MessageEmbed()
            .addFields(teams)
            .setTitle(blips[Math.floor(Math.random() * blips.length)])
            .setColor('RANDOM');

        message.channel.send(embed);

        return;

    }
};