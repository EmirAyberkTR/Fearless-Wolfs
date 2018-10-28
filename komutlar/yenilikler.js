const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
  const pingozel = new Discord.RichEmbed()
    .setTitle("YENİLİKLER")
  .setAuthor("TEST | Yenilikler", bot.user.avatarURL)
  .setColor("RANDOM")
  .setDescription("F!rol-olustur / F!rol-ver / F!havadurumu eklenmistir. F!yardım ! Eklenmesini İstediginiz Komutları F!tavsiye <tavsiyeniz> ile gonderiniz.")
  .setFooter('Test Botu | dvebot.rf.gd', bot.user.avatarURL)
  .setThumbnail(bot.user.avatarURL)
  .setTimestamp()
  .addBlankField(true)
      return message.author.sendEmbed(pingozel)
};

module.exports.help = {
  name: "yenilikler"
}