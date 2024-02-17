require('./settings/setting.env');
//require('commands.json');
const{REST, Routes}=require('discord.js');

const commands=[
    {
        name:'hey',
        description:'says hey',
    },
    {
        name:`ping`,
        description:`PONG`,
    },
    {
        name:'roll20',
        description: 'Rolls a D20',
    },
    {
        name:'roll12',
        description: 'Rolls a D12',
    },
    {
        name:'roll10',
        description: 'Rolls a D10',
    },
    {
        name:'roll8',
        description: 'Rolls a D8',
    },
    {
        name:'roll6',
        description: 'Rolls a D6',
    },
    {
        name:'roll4',
        description: 'Rolls a D4',
    },
    {
        name:'dndplayerstart5e',
        description: 'This is the start to your character for dnd. This guide will take you through the steps.',
    },
    {
        name: 'coinflip',
        description:'flips a coin heads or tails',
    },
    {
        name:'roll100',
        description: 'Rolls a D100 (minus the chasing of the dice)',
    },
]


const rest= new REST({version: '10'}).setToken(TOKEN);
(async ()=>{
    try{
        console.log('registering commands')
        await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            {body: commands}
        )
        console.log('Registering DONE')
    } catch(error){
        console.log(`there was an error ${error}`)
    }
})();