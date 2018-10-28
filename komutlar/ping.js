const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
  .setAuthor('Ping Değerim')
  .setColor("#DB9721")
  .setTitle(" ")
  .setDescription(' :ping_pong: | Ortalama Ping Değerim ' + `${bot.ping}` + 'ms')
  .setFooter(" ")
  return message.channel.sendEmbed(embed);
};

module.exports.help = {
  name: "ping"
}