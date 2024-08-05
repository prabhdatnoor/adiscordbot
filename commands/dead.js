const shuffle = require('../my_functions/shuffle.js');
const Discord = require('discord.js');
const getMembers = require('../my_functions/getMembers.js');

module.exports = { //group,method,number
    name: 'dead',
    description: '',
    aliases: ['deadbd', 'day'],

    execute(message, args) {
        var members = getMembers(message);

        if (members.length >= 2) {
            shuffle(members);

            const embed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Dead By Daylight Game')
                .setDescription('Killer is ' + members.splice(0, 1))
                .addField({ name: 'Survivors', value: members.splice(0, 4), inline: true });

            if (members.length > 0) {
                embed.addField({
                    name: 'Spectators',
                    value: members.splice(0, members.length),
                    inline: true
                });
            }
        } else {
            message.channel.send('need atleast 2 ppl');
        }
    }
};