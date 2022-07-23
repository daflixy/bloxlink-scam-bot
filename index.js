const express = require("express")
const app = express()

app.get("/", (req, res) => {
 res.send("hello hell")
})

app.listen(3000, () => {
  console.log("project is ready!")
})

let Discord = require("discord.js")
let client = new Discord.Client()

client.setMaxListeners ( 0 )

client.on("message", message => {
if(message.content == "bot") {
  message.channel.send("Had je het over mij? Als je wil weten wat ik allemaal kan. Type dan ?help")
}
})

client.on("message", message => {
if(message.content == "?help") {
}if(message.content === "?help") {
 let embed = new Discord.MessageEmbed()
 .setTitle("Totaal aantal commands: 3")
 .setDescription(`
**Commands:**
?story maxnlkill

**Hulp commands:**
?regels
[Klik hier voor mijn socials!](https://solo.to/maxnlkill)

`)
 .setColor("RED")
 .setFooter("MaxNLkill's bot")
 message.channel.send(embed)
}
})

client.on("message", message => {
if(message.content == "?story maxnlkill") {
}if(message.content === "?story maxnlkill") {
 let embed = new Discord.MessageEmbed()
 .setTitle("MaxNLkill's verhaal")
 .setDescription(`

**Ga met mij mee terug in de tijd…:clock2:**

*Het begon allemaal in de zomer van 2021. Max had voor de grap een TikTok account gemaakt, genaamd: MaxNLkill. Heel veel motivatie om te uploaden had hij nog niet, wel zag die allemaal andere TikTokkers die goede Fortnite content uploaden. 

Op en geven moment kwam @FaZe Deempie naar Max toe. En zei: het word nou wel tijd dat je wat gaat uploaden. Je hebt je TikTok niet voor niks aangemaakt.

Max begon samen met @FaZe Deempie op 11 juni met uploaden. Inmiddels heeft Max al bijna 6500 volgers en stuk voor stuk zijn ze geweldig.*

Bedankt namens mij dat je mee bent gegaan in deze reis. We zijn van ver gekomen met z’n allen, maar we zijn nog lang niet klaar. 

[Klik hier voor mijn socials!](https://solo.to/maxnlkill)

`)
 .setColor("RED")
 .setFooter("MaxNLkill's bot")
 message.channel.send(embed)
}
})

client.on("message", message => {
if(message.content == "wtf") {
}if(message.content === "wtf") {
 let embed = new Discord.MessageEmbed()
 .setTitle("📚wtf📚")
 .setDescription(`

i agree.

[daflixy site!](https://site.daflixy.tk)

`)
 .setColor("RED")
 .setFooter("Bloxlink")
 message.channel.send(embed)
}
})

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "" }, status: "idle" })

})


client.login("MTAwMDM1MTMxNjQxNTA5NDgxNQ.GkM-nN.TlGfvE9mHYOBUzYD_uyZRR07tCEZ3eAUx2unvE")