const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!')
    client.user.setPresence({ game: { name: 'Type !help', type: 0 } });
});

client.on('message', message => {
    if (message.content === 'Hi Goddess') {
    	message.channel.send('Hello my Child.');
  	}
});

client.on('message', message => {
    if (message.content === '!newbieguide') {
    	message.reply('$('.my-link').html(<a href="https://puu.sh/yRHnV/48c7ded27a.png">Follow this path</a>');
  	}
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('Only guides available: !newbieguide');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
