import os

path = input("Enter path to folder (or just hit enter for current dir): ")
if path == "": path = "."

search = input("Enter text to be replaced: ")
replace = input("Enter replacement text: ")

for file in os.listdir(path):
    if search in file:
        os.rename(file, file.replace(f"{search}", f"{replace}"))