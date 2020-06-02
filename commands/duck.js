const fetch = require('node-fetch');
const hexcode = require('../my_functions/randhex.js');
const Discord = require('discord.js');

module.exports = {
    name: 'duck',
    description: 'ducks!',
    execute(message, args) {
        (async() => {
            const response = await fetch('https://random-d.uk/api/random');
            const json = await response.json();
            console.log(json);
            const embed = new Discord.MessageEmbed();
            embed.setColor(hexcode()).setTitle('Duck').setDescription('Boom!').setImage(json.url).setFooter(json.message);

            message.channel.send(embed);
        })();

    }
};