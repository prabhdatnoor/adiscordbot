module.exports = {
    name: 'test',
    description: 'Ping!',
    execute(message, args) {
        message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        //console.log(message);
        console.log(args);
    },
};