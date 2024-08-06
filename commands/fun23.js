const percentgen = require('../my_functions/percentgen.js');
const hexcode = require('../my_functions/randhex.js');
const Discord = require('discord.js');

module.exports = {
    name: 'fun23',
    description: 'meme library fetch',
    aliases: 'simp',
    execute(message, args) {
        var percent = percentgen(),
            rating = 'You are: ' + percent + '% Simp',
            comment;
        if (args[0] !== undefined) {
            rating = args[0] + ' is: ' + percent + '% Simp';
        }

        if (percent <= 20) {
            comment = "Nice!";
        } else if (percent >= 90) {
            comment = "Mega Simp";
        } else if (percent > 20 && percent < 50) {
            comment = "Hmmmm....";
        } else if (percent >= 50 && percent < 90) {
            comment = "Chiiilllll....";
        }

        const embed = new Discord.MessageEmbed();
        embed.setColor(hexcode()).setTitle('Simp Meter')

        if (comment !== undefined) {
            embed.setDescription(rating + '\n' + comment);

        } else {
            embed.setDescription(rating);
        }

        message.channel.send(embed);
    }
}