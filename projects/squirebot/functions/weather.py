import requests

api_key = "1a9bae62d6c677c1f405b70c87ab14d7"
base_url = "https://api.openweathermap.org/data/2.5/weather?"
city_name = input("Enter City name or Coordinates to the thousandth-place precision: ")
measure = "&units=imperial"

# Complete url address, converted for your convenience.
if len(city_name.replace(" ", "").split(',')) == 2:
    coords = city_name.replace(" ", "").split(',')
    complete_url = base_url + "lat=" + coords[0] + "&lon=" + coords[1] + "&appid=" + api_key + measure
else:
    complete_url = base_url + "q=" + city_name + "&appid=" + api_key + measure

# Get method of requests module
response = requests.get(complete_url)
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
    weather_description = x['weather'][0]['description']
    current_humidity = main['humidity']
    print(f"Current temperature in {(x['name']).capitalize()} is {celsius}•C / {int(current_temperature)}•F. {weather_description.capitalize()} and {current_humidity} humidity.")

else:
    print("Some other error... check: https://openweathermap.org/faq#error401")