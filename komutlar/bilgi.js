const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarına bilgi mesajımı gönderdim! :postbox: ');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setAuthor(message.author.username, message.author.avatarURL)
	.addField("**❯ Yapımcı**", "<@403882308412637186>", )
    .addField("**❯ Alt Yapı Sahibi**", " İhsan Baki Doğan ", )
    .addField("**❯ Sürüm**", " v0.0.1 ", )
    .addField("**❯ Yapım Tarihi**", " 05 Ekim 2018 ", )
	.addField("**❯ Bot Davet**", " [Davet Et](https://discordapp.com/oauth2/authorize?client_id=497515809019527168&permissions=0&scope=bot)", )
    .addField("**❯ Destek sunucusu**", " [Sunucumuza Katıl](https://discord.gg/aEWQwNZ) ", )
    .addField("**❯ DJ Soner**", " [Lefkoşa Ortam](https://gerdap.com) ", )
	.setThumbnail("https://forum.gamer.com.tr/attachments/bilgi-png.55209/");
    return message.author.send(pingozel)
};

module.exports.help = {
  name: "bilgi"
}