const Discord = require("discord.js");

const client = new Discord.Client();
const client2 = new Discord.Client();

const Guild = "211543198651121664";
const voiceChannel = "613754309036998656";

client.on("ready", () => {
  console.log(client.user.tag + " Ready! (" + client.guilds.get(Guild).name + ', ' + client.guilds.get(Guild).channels.get(voiceChannel).name + ')');
  client.channels.get(voiceChannel).join().then(connection => {
    console.log(client.user.tag + " Successfully connection.");
    setInterval(() => {
      if(!client.guilds.get(Guild).members.get(client.user.id).voiceChannel || client.guilds.get(Guild).members.get(client.user.id).voiceChannel && client.guilds.get(Guild).members.get(client.user.id).voiceChannelID != voiceChannel) {
        client.channels.get(voiceChannel).join().then(connection => {
          console.log(client.user.tag + " Successfully connection.");
        });
      }
    }, 5000);
  });
});

client.login(process.env.TOKEN);

lient.on("ready", () => {
  console.log(client.user.tag + " Ready! (" + client.guilds.get(Guild).name + ', ' + client.guilds.get(Guild).channels.get(voiceChannel).name + ')');
  client.channels.get(voiceChannel).join().then(connection => {
    console.log(client.user.tag + " Successfully connection.");
    setInterval(() => {
      if(!client.guilds.get(Guild).members.get(client.user.id).voiceChannel || client.guilds.get(Guild).members.get(client.user.id).voiceChannel && client.guilds.get(Guild).members.get(client.user.id).voiceChannelID != voiceChannel) {
        client.channels.get(voiceChannel).join().then(connection => {
          console.log(client.user.tag + " Successfully connection.");
        });
      }
    }, 5000);
  });
});

client.login(process.env.TOKEN2);

