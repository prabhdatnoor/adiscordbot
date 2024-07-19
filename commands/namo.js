const shuffle = require('../my_functions/shuffle.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const indcolors = ['#ff9933', '#FFFFFF', '#128807', '#000088'];

module.exports = {
    name: "namo",
    description: "kinda like 8ball but not really",
    aliases: ['india', 'modiji', 'modisabh', 'modi', 'modisab'],
    execute(message, args) {
        fetch('https://namo-memes.herokuapp.com/memes/1')
            .then((resp) => resp.json())
            .then(function(resp) {
                //console.log(resp[0].url);
                var url = resp[0].url;
                //console.log(url);
                const embed = new Discord.MessageEmbed();
                var color = indcolors[Math.floor(Math.random() * indcolors.length)];
                embed.setColor(color).setTitle('Modi Sabh: The one and only')
                    .setImage(url).setFooter('Powered by: theIYD');

                message.channel.send(embed);
            })
            .catch(function(error) {
                console.log(error);

            });
    }
};
