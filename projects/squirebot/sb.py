import discord
import random
import requests, json

from mytoken import mytoken, maps_api

client = discord.Client()

# Google python decorators
@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    print(message)
    if message.author == client.user:
        return
    # google coroutines you noob
    if message.content.startswith('sb.hello'):
        await message.channel.send('Hello!')

    if message.content.startswith("sb.help"):
        await sb_help(message)

    if message.content.startswith("sb.today"):
        await today(message)
    
    if message.content.startswith("sb.dota"):
        await dota(message)
        
    if message.content.startswith('sb.randomciv'):
        civ_id = random.randint(1,8)
        await randomciv(civ_id, message)

async def sb_help(message):
    await message.channel.send(f"Someone help {message.author.name}!")

async def today(message):
    await message.channel.send(f"Hey, {message.author.name}, today is incomplete.")

async def dota(message):
    await message.channel.send("Dota sucks.")

async def randomciv(civ_id, message):
    civ = str()
    if civ_id == 1:
        civ = "The Abbasid Dynasty"
        emoji_name = "abbasid"
    if civ_id == 2:
        civ = "The Chinese"
        emoji_name = "chinese"
    if civ_id == 3:
        civ = "The Delhi Sultanate"
        emoji_name = "delhi"
    if civ_id == 4:
        civ = "The French"
        emoji_name = "french"
    if civ_id == 5:
        civ = "The English"
        emoji_name = "english"
    if civ_id == 6:
        civ = "The Holy Roman Empire"
        emoji_name = "hre"
    if civ_id == 7:
        civ = "The Mongols"
        emoji_name = "mongols"
    if civ_id == 8:
        civ = "The Rus Civilization"
        emoji_name = "rus"

    flag = discord.utils.get(message.guild.emojis, name=emoji_name)
    await message.channel.send(f'{flag} {flag} {flag} {civ} {flag} {flag} {flag}')

def main(): 
    client.run(mytoken)

if __name__ == '__main__':
    main()