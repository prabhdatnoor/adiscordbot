const Discord = require('discord.js');
const filterbots = require('../my_configs/bot_config.json').settings.filterbots;

module.exports = function(message) {

    var output = [];

    var vchannel = message.member.voice.channel;

    if (!vchannel) {
        message.channel.send('Error! Most likely you are not in a voice channel.');
        return;
    }

    if (filterbots === false) {
        vchannel.members.forEach(key => {

            output.push(key.user.username);

        });
    } else {

        vchannel.members.forEach(key => {

            if (key.user.bot === false) {
                output.push(key.user.username);
            }
        });
    }


    return output;

}