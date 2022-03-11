import os

search = input("Enter text to be replaced: ")
replace = input("Enter replacement text: ")

for file in os.listdir("."):
    if search in file:
        os.rename(file, file.replace(f"{search}", f"{replace}"))