const Discord = require('discord.js');
module.exports = (message) => {

    const numPlayers = [];

    message.member.voice.channel.members.forEach(key => {
        //if (key.user.bot === false) {
        numPlayers.push(key.user.username);
        //}
    });
    return numPlayers;

};