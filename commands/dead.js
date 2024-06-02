const shuffle = require('../my_functions/shuffle.js');
const Discord = require('discord.js');
const toEmbed = require('../my_functions/toEmbed.js')
const getMembers = require('../my_functions/getMembers.js');
//console.log('yuh');
module.exports = { //group,method,number
    name: 'dead',
    description: '',
    execute(message, args) {
        //var members = deadbd(getMembers(message));
        //console.log('here');
        var members = toEmbed(deadbd(getMembers(message)));


        //console.log('yuppy');
        //console.log(members);
        //toEmbed(members);
        //console.log('yesmayne');
        //console.log(members.splice(0, 1));

        const embed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Dead By Daylight Game')
            .setDescription('Killer is ' + members.splice(0, 1)[0]['value']);

        //console.log('after embed');
        //console.log(members);

        if (members.length > 0) {
            embed.addFields(members);
        }

        message.channel.send(embed);
        //console.log('sent dead by daylight');

    }
};
//var members = [1, 2, 3, 4, 5, 6];
//console.log(deadbd(members));

function deadbd(members) {
    shuffle(members);
    //console.log('yo' + members);
    var game = [];

    game['killer'] = members.splice(0, 1);
    game['survivors'] = members.splice(0, 4);
    if (members.length > 0 && members !== undefined) {
        game['spectators'] = members;
    }

    return game;
}