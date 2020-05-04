const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const config = require('./config');

const client = new SteamUser();

const logInOptions = {
    accountName: config.accountName,
    password: config.password,
    twoFactorCode: SteamTotp.generateAuthCode(config.sharedSecret)
};

client.logOn(logInOptions);

client.on('loggedOn', () => {
    
    console.log('[Goigois1] Script Working');
    console.log('This is Just a Demo , but , If You Need Help Just Join This Discord https://discord.gg/5GX3rdV');

    client.setPersona(SteamUser.EPersonaState.Online);
    client.gamesPlayed(["Script Made By: discord.gg/5GX3rdV",730,440]);
});
