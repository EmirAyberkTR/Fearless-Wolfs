const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Hiçbir komut bulunamadı!");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./komutlar/${f}`);
    console.log(`${f} yüklendi!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} ${bot.guilds.size} sunucuda aktif!`);

 bot.user.setGame("F!yardım", "https://www.twitch.tv/emir%22")
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "F!";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
})

bot.login('NDk3NTE1ODA5MDE5NTI3MTY4.DpgaJg.puafpWnEtrVvVjbO3tWD0U25vTw')
