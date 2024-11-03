import csv
import json
import sys

from classes import Student

eric = Student(
    id=1, 
    name="PoopyBoy",
    totalAverage=69,
    courses=['English', 'Franch']
    )

print(eric)
jsonStr = json.dumps(eric, indent=2, default=lambda x: x.__dict__)
print(jsonStr)

