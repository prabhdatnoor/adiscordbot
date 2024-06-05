const config = require('../my_configs/team_gen.json');
const Discord = require('discord.js');
const sortleftovers = config.main['sortleftovers'];
const toEmbed = require('../my_functions/toEmbed.js')
const embedconv = true;
const getMembers = require('../my_functions/getMembers.js');

const bypergroup = require('../my_modules/rtg_bypergroup.js');
const byteams = require('../my_modules/rtg_byteams')
const hexcode = require('../my_functions/randhex.js');

const nice = [1, 2, 3, 4, 5, 6, 7];

module.exports = { //group,method,number
    name: 'game',
    description: '',
    execute(message, args) {
        //console.log('bruh1');
        var method = args[0];
        var number = args[1];

        var members = getMembers(message);

        if (members.length > 2) {

            if (method === undefined && number === undefined) {
                //console.log('MAIN');
                console.log(members);
                members = byteams(members, undefined, sortleftovers, embedconv);
                //return nice;
            } else if (method === 'byteams') {
                members = byteams(members, number, sortleftovers, embedconv);
            } else if (method === 'bypergroup') {
                message.channel.send('work in progress');
                //members = bypergroup(members, number, sortleftovers, embedconv);
            } else {
                message.channel.send('command not recognized');
            }
            //console.log('1' + members);
            //console.log('2' + toEmbed(members));
            const embed = new Discord.MessageEmbed()
                .setColor(hexcode())
                .setTitle('Groups')
                .addFields(toEmbed(members));

            message.channel.send(embed);
            //console.log('sent teams');
        } else {
            message.channel.send('need more than 2ppl fam');
        }

    }
};