require('dotenv').config();
var Discord = require('discord.js');
var logger = require('winston');
// var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client();

var token = process.env.BOT_TOKEN;

bot.on('ready', function () {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (message) {
    if (message.content.substring(0, 1) == '!') {
        var args = message.content.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        
        var today = Date.now();
        var start = Date.UTC(2017, 8, 20);
        var interval = Math.floor((today - start)/(24*60*60*1000));

        var idPrecious = '368906096230006785';
        
        switch(cmd) {
            case 'site':
                message.channel.send('Estamos a ' + interval + ' dias sem site, mas o <@ '+ idPrecious +'> está trabalhando duro nele!');
            break;
         }
     }
});

bot.login(token);