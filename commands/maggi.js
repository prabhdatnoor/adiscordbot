const maggi = require('../my_configs/memelib.json').maggi;
const Discord = require('discord.js');
module.exports = {
    name: "maggi",
    description: "random maggi from assets",
    aliases: 'maggie',
    execute(message, args) {
        //console.log(args[0] === undefined);
        if (args[0] === undefined) {
            var randmag = [];
            maggi.forEach(el => {
                    randmag.push(el.url);
                })
                //console.log(randmag.length);

            //var randmag_send = randmag[Math.floor(Math.random() * (randmag.length + 1))];
            //console.log(randmag_send);

            const embed = new Discord.MessageEmbed();
            embed.setColor('YELLOW').setTitle('Maggi 2 Minute Only');
            embed.setImage(randmag[Math.floor(Math.random() * (randmag.length))]);

            message.channel.send(embed);

        }
    }
}