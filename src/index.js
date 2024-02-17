require('./settings/setting.env');
const {Client, IntentsBitField, Message} =require('discord.js');

let happyScore=100;


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
   // if(!interaction.isCommand())return;
    console.log(interaction.commandName)
    let set=interaction.commandName;
    if(set.substr(0,4)=='roll'){
        switch(set){
            case "roll4":
            interaction.reply(`${Math.floor(Math.random()*4)+1}`);
            break;
        case "roll6":
            interaction.reply(`${Math.floor(Math.random()*6)+1}`);
            break;
        case "roll8":
            interaction.reply(`${Math.floor(Math.random()*8)+1}`);
            break;
        case "roll10":
            interaction.reply(`${Math.floor(Math.random()*10)+1}`);
            break;
        case "roll12":
            interaction.reply(`${Math.floor(Math.random()*12)+1}`);
            break;
        case "roll20":
            let nat20=Math.floor(Math.random()*20)+1
            if(nat20==20){
                interaction.reply(`CRITICAL HIT! \nYou rolled a ${nat20}`)
            }
            else if(nat20==1){
                interaction.reply(`CRITICAL MISS! \nYou rolled a ${nat20}`)
            }
            else{
                interaction.reply(`${nat20}`);
            }
            break;
        }
    }
    switch(set){
        case "hey":
            interaction.reply('hey')
            break;
        case "ping":
            interaction.reply('PONG')
            break;
        
        }
})



// client.on('messageCreate',(msg)=>{
//     let sent= msg.content
//     sent.map(happyScoreDown())
//     console.log(happyScore)
// })


client.on('messageCreate',(msg)=>{
    console.log(`${msg.author.username}/ ${msg.author.id}: ${msg.content}`)
    if(msg.content=== 'hello'&& msg.author.id != '947623521037746216'){
        msg.reply('hello')
    }
    //dice roll
    //if(msg.content==='Roll')

})
// let bwords=['fuck','shit','cunt']

// function happyScoreDown(msg){
//     for(let i=0;i<bwords.length;i++){
//         if(msg==bwords[i]){
//             return happyScore=happyScore-1
//         }
//     }
// }














client.login(TOKEN);
