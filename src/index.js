require('./settings/setting.env');
const {Client, IntentsBitField, Message} =require('discord.js');
const data = require("fs").readFileSync("./src/data.json");


//Reads data.json file and assigns it to jsonObject
const jsonObject = JSON.parse(data);
console.log(jsonObject[0].name);






//This is what the bot had access too in server 'Guild' is just server
const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});



//This just console logs when the bot is offically ready
client.on('ready',(c)=>{
    console.log(`🐏 ${c.user} is online`);
})

client.on('interactionCreate',(interaction)=>{
   // if(!interaction.isCommand())return;
    console.log(interaction.commandName)
    let set=interaction.commandName;
    
    //If statement checks to see if requesting a roll/coinflip. This is just to speed up the bot so next switch statement wont be too full.
    if(set.substr(0,4)=='roll'||set==='coinflip'){
        switch(set){
            case "roll4":
            interaction.reply(`${ran(4)}`)
            break;
        case "roll6":
            interaction.reply(`${ran(6)}`)
            break;
        case "roll8":
            interaction.reply(`${ran(8)}`)
            break;
        case "roll10":
            interaction.reply(`${ran(10)}`)
            break;
        case "roll12":
            interaction.reply(`${ran(12)}`)
            break;
        case "roll20":
            let nat20=ran(20)
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
        case "coinflip":
            let flip=ran(2);
            if(flip==2){
                interaction.reply('Heads')
            }
            else{
                interaction.reply('Tails')
            }
            break;
        case "roll100":
            interaction.reply(`${ran(100)}`);
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
        case "dndplayerstart5e":
            interaction.reply({content:'This is the start to your epic adventure', ephemeral:true })
            break;
        }
})


//This just replies to anyone that writes the words hello with hello/ will not reply to itself
client.on('messageCreate',(msg)=>{
    console.log(`${msg.author.username}/ ${msg.author.id}: ${msg.content}`)
    if(msg.content=== 'hello'&& msg.author.id != '947623521037746216'){
        msg.reply('hello')
    }
    

})




//function is to set randomness and is called by all rolls/coinflip. Returns any random value between 1-num
function ran(num){
    return(Math.floor(Math.random()*num)+1);
}









//turns on the bot offically
client.login(TOKEN);
