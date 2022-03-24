string = input("Enter string to find the ASCII value sum: ")

sum = 0
for letter in string:
    sum += ord(letter)

print(sum)
