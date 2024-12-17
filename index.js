const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

const PORT = process.env.PORT || 3000;


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//prefix for command
const prefix = require('./my_configs/bot_config.json').prefix;

const d_key = process.env.diskey; //for use with heroku

//once the bot has initialized, send a message in console
client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    //if the message sent by player doesn't start with the prefix, do nothing
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    //get the args from the command
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    //find what to do with this command in the commands folder
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));;
    if (!command) return;//if command not found, return
    try {//try executing command
        command.execute(message, args);
        console.log('Sent ' + commandName + '-->' + 'User:' + message.member.user.username + '||ID: ' + message.member.user.id);
    } catch (error) {//if doesnt work send error
        console.error(error);
        message.channel.send('there was an error trying to execute that command!');
    }

});

client.login(d_key);

//invite-link : https://discord.com/oauth2/authorize?client_id=714965188683759707&scope=bot&permissions=2146958847
