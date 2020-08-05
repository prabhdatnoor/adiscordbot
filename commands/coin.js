const Discord = require('discord.js');
var coin = {
    'heads': {
        'name': 'Heads!',
        'color': 'RED'
    },
    'tails': {
        'name': 'Tails!',
        'color': 'GREEN'
    }
};

module.exports = {
    name: "coin",
    description: "just flips",
    aliases: "flip",
    execute(message, args) {
        var side = coin[Object.keys(coin)[Math.floor(Math.random() * 2)]];
        const embed = new Discord.MessageEmbed()
            .setTitle(side.name)
            .setAuthor('Flipped!')
            .setColor(side.color);
        message.channel.send(embed);
    }
}