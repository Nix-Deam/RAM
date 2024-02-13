require('./settings/setting.env');
const{REST, Routes}=require('discord.js');

const commands=[
    {
        name:'hey',
        description:'says hey',
    },
    {
        name:`ping`,
        description:`PONG`,
    }
];
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