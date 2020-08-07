const shuffle = require('../my_functions/shuffle.js');
const Discord = require('discord.js');
const getMembers = require('../my_functions/getMembers.js');

module.exports = { //group,method,number
    name: 'dead',
    description: '',
    aliases: ['deadbd', 'day'],

    execute(message, args) {
        var members = getMembers(message);

        var killer, survivors, spectators;

        if (members.length >= 2) {
            shuffle(members);
            killer = members.splice(0, 1);

            if (members.length <= 4) {
                survivors = members;
            } else {
                survivors = members.splice(0, 4);
                if (members.length > 0) {
                    spectators = members;
                }
            }
            const embed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Dead By Daylight Game')
                .setDescription('Killer is ' + killer)
                .addField('Survivors', survivors, true);

            if (spectators > 0) {
                embed.addField('Spectators', spectators, true);
            }
            message.channel.send(embed);
        } else {
            message.channel.send('Need atleast 2 ppl!');
        }
    }
};