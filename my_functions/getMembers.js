const Discord = require('discord.js');
const filterbots = require('../my_configs/bot_config.json').settings.filterbots;

module.exports = (message) => {

    const numPlayers = [];

    if (filterbots === false) {
        message.member.voice.channel.members.forEach(key => {

            numPlayers.push(key.user.username);

        });
    } else {

        message.member.voice.channel.members.forEach(key => {

            if (key.user.bot === false) {
                numPlayers.push(key.user.username);
            }
        });
    }


    return numPlayers;

};