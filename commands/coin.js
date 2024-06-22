const Discord = require('discord.js');

module.exports = {
    name: "coin",
    description: "just flips",
    aliases: "flip",
    execute(message, args) {
        var sides = ['Heads!', 'Tails!'];

        var coin = sides[Math.floor(Math.random() * 2)]

        const embed = new Discord.MessageEmbed();

        embed.setTitle(coin);
        embed.setAuthor('Flipped!');
        embed.setColor('RANDOM');

        message.channel.send(embed);

    }
}