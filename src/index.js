require('./settings/setting.env');
const {Client, IntentsBitField, Message} =require('discord.js');

const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

client.on('ready',(c)=>{
    console.log(`🐏 ${c.user} is online`);
})

client.on('interactionCreate',(interaction)=>{
    console.log(interaction.commandName)
    if(interaction.commandName =="hey"){
        interaction.reply('hey')
    }
    if(interaction.commandName=='ping'){
        interaction.reply('PONG')
    }
})






client.on('messageCreate',(msg)=>{
    console.log(`${msg.author.username}/ ${msg.author.id}: ${msg.content}`)
    if(msg.content=== 'hello'&& msg.author.id != '947623521037746216'){
        msg.reply('hello')
    }

})

client.login(TOKEN);
