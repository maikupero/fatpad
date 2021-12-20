import discord
import random
import requests
import asyncio

from mytoken import mytoken, maps_api

client = discord.Client()

# Google python decorators
@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    # google coroutines you noob
    if message.content.lower().startswith('sb.'):
        print(f"Attempting to handle `{(message.content)[3:]} command` from {message.author}")

        ### ONE LINERS ###
        if (message.content)[3:].startswith('hello'):
            await message.channel.send(f'Hey {str(message.author)[:-5]}! How are ya?')
        if (message.content)[3:].startswith('go'):
            await message.channel.send("No")
        if (message.content)[3:].startswith('yo'):
            await message.channel.send("sup")
        if (message.content)[3:].startswith('sup'):
            await message.channel.send("chillin'")

        ### LIL ONES ###
        if (message.content)[3:].startswith('attend'):
            await sb_attend(message)
        if (message.content)[3:].startswith("help"):
            await sb_help(message)
        if (message.content)[3:].startswith("dota"):
            await dota(message)
        if message.content[3:].startswith('randomciv') or message.content[3:].startswith('aoe') or message.content[3:].startswith('civ'):
            await randomciv(message)

        ### BIG ONES ###
        if (message.content)[3:].startswith("today") or (message.content)[3:].startswith("weather"):
            await message.channel.send("City? Or coordinates to the thousandth-place precision if you're a nerd.")
            def check(msg):
                return msg.author == message.author and msg.channel == message.channel
            try:
                location = await client.wait_for("message", check=check, timeout=30) # 30 seconds to reply
                await weather(message, location.content)
            except asyncio.TimeoutError:
                await message.channel.send("I'm so sorry sir, :man_bowing: I have too many other things to take care of I really must get going but do not hesitate to call again I'm so sorry, milord.")
            except Exception as e:
                print(e)
    
    # if message.content.startswith(sb.game):
    #     @client.command()
    #     async def command(ctx):
    #         computer = random.randint(1, 10)
    #         await ctx.send('Guess my number')

    #         def check(msg):
    #             return msg.author == ctx.author and msg.channel == ctx.channel and int(msg.content) in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    #         msg = await client.wait_for("message", check=check)

    #         if int(msg.content) == computer:
    #             await ctx.send("Correct")
    #         else:
    #             await ctx.send(f"Nope it was {computer}")

async def sb_help(message):
    await message.channel.send(f"Someone help {message.author.name}!")

async def sb_attend(message):
    num = random.randint(1,7)
    response = str()
    if num == 1:
        response = "Ready, sir."
    if num == 2:
        response = "As you order, sir."
    if num == 3:
        response = "What can I do for you?"
    if num == 4:
        response = "Work work."
    if num == 5:
        response = "Something need doing?"
    if num == 6:
        response = "How can I help you, sir?"
    if num == 7:
        response = "How can I be of service, my lord?"
    if num == 8:
        response = "$peon"
    await message.channel.send(response)

async def dota(message):
    await message.channel.send("Dota sucks.")

async def weather(message, location):
    api_key = maps_api
    base_url = "https://api.openweathermap.org/data/2.5/weather?"
    city_name = location
    measure = "&units=imperial"

    # Complete url address, converted for your convenience.
    if len(city_name.replace(" ", "").split(',')) == 2:
        coords = city_name.replace(" ", "").split(',')
        complete_url = base_url + "lat=" + coords[0] + "&lon=" + coords[1] + "&appid=" + api_key + measure
    else:
        complete_url = base_url + "q=" + city_name + "&appid=" + api_key + measure

    # Get method of requests module
    response = requests.get(complete_url)
    print(f"Looking up request {response} for location {city_name}.")
    x = response.json()
    
    if x['cod'] == 401:
        print("Provided API Key didn't work.")
    elif x['cod'] == 404:
        print("City Not Found.")
    elif x['cod'] == 429:
        print("Too many calls for your free plan.")
    elif x['cod'] == 200:
        main = x['main']
        current_temperature = main['temp']
        celsius = int((current_temperature - 32) * .5556)
        current_humidity = main['humidity']
        weather_description = x['weather'][0]['description']
        if "rain" in weather_description:
            weather_emoji = ":cloud_rain:"
        elif "cloud" in weather_description:
            weather_emoji = ":white_sun_cloud:"
        elif "clear" in weather_description:
            weather_emoji = ":sunny:"
        elif "snow" in weather_description or "sleet" in weather_description: 
            weather_emoji = ":cloud_snow:"
        elif "storm" in weather_description or "thunder" in weather_description:
            weather_emoji = ":thunder_cloud_rain:"
        elif "tornado" in weather_description:
            weather_emoji = ":cloud_tornado:"
        else:
            weather_emoji = ":fire:"
        await message.channel.send(f":man_bowing: Current temperature in {(x['name']).capitalize()} is {celsius}°C / {int(current_temperature)}°F. :man_bowing:")
        await message.channel.send(f"{weather_emoji} {weather_description.capitalize()} {weather_emoji} and {current_humidity} humidity. If it please you, sir. :man_bowing:")
        print("Weather success.")
    else:
        print("Some other error... check: https://openweathermap.org/faq#error401")

async def randomciv(civ_id, message):
    civ_id = random.randint(1,8)
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