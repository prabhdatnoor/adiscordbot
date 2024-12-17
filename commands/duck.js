const fetch = require('node-fetch');
const hexcode = require('../my_functions/randhex.js');
const Discord = require('discord.js');

module.exports = {
    name: 'duck',
    description: 'ducks! Send a picture of a random duck duck!',
	
    execute(message, args) { //send a request to the random-d.uk api
        (async() => {
            const response = await fetch('https://random-d.uk/api/random');
            const json = await response.json();
            const embed = new Discord.MessageEmbed();

//send message
            embed.setColor(hexcode()).setTitle('Duck').setDescription('Boom!').setImage(json.url).setFooter(json.message);

            message.channel.send(embed);
        })();

    }
};
