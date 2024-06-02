const Discord = require('discord.js');
const fs = require('fs');
const hexcode = require('../my_functions/randhex.js');

module.exports = {
    name: 'meme',
    description: 'meme library fetch',
    execute(message, args) {
        message.channel.send('coming soon!')
            //const embed = new Discord.MessageEmbed();
            //embed.setColor(hexcode()).setTitle('meme').setImage('../meme_library/Sosa.jpg');
    }
}