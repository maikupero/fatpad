import discord
from mytoken import mytoken
from randomstuff import random

client = discord.Client()
print(client)
# Google python decorators
@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    # google coroutines you noob
    if message.content.startswith('sb.hello'):
        await message.channel.send('Hello!')

    if message.content.startswith('sb.random'):
        await message.channel.send(f'How about {random.number_gen()}?')

client.run(mytoken)