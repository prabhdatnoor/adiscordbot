const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const prefix = require('./my_configs/bot_config.json').prefix;
const d_key = require('./my_configs/secret_stuff.json')["d-key"];

console.log(d_key);
if (d_key === undefined) {
    d_key = process.env.diskey;
}

const nicetry = ['yup', 'dude', 'wow', 'nice', 'cools', 'brouh', '50s'];

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    var date = new Date();

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);
    try {
        console.log('k');
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.channel.send('there was an error trying to execute that command!');
    }

});

client.login(d_key);

//invite-link : https://discord.com/oauth2/authorize?client_id=714965188683759707&scope=bot&permissions=2146958847