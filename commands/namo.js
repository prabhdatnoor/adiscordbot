const shuffle = require('../my_functions/shuffle.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const indcolors = ['#ff9933', '#FFFFFF', '#128807', '#000088'];

module.exports = {
    name: "namo",
    description: "Sends a random meme of Narendra Modi",
    aliases: ['india', 'modiji', 'modisabh', 'modi', 'modisab'],
    execute(message, args) {
        namo();

        async function namo() {

		//using fetch api, get a response from 

            var response = await fetch('https://namo-memes.herokuapp.com/memes/1');

            var json = await response.json();

            var image = await json[0].url;
            //console.log(image);

            var image_check = await fetch(image);

            //console.log(image_check.ok);

            if (image_check.ok !== true) {
                namo();
            }
            const embed = new Discord.MessageEmbed();
            var color = indcolors[Math.floor(Math.random() * indcolors.length)];
            embed.setColor(color).setTitle('Modi Sabh: The one and only')
                .setImage(image).setFooter('Powered by: theIYDeid');

            message.channel.send(embed);
            return;
        }
    }
};