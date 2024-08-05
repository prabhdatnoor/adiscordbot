const config = require('../my_configs/bhaji_config.json');
const Discord = require('discord.js');

module.exports = {
    name: "plsbhaji",
    description: "kinda like 8ball but not really",
    aliases: config.aliases,
    execute(message, args) {

        var category = config.blips[Object.keys(config.blips)[Math.floor(Math.random() * 3)]];


        var embed = new Discord.MessageEmbed()
            .setColor(category.color)
            .setTitle('22G says:')
            .setDescription(category.text[Math.floor(Math.random() * category.text.length)]);

        message.channel.send(embed);

    }
}