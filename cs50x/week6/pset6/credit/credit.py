from cs50 import get_string
import sys
cardnum = get_string("Number: ")

checksum = 0
others = 0

# Way to go through with only one loop, adding every other digit to every other sum.
for i in range(len(cardnum) - 1, -1, -1):
    if len(cardnum) % 2 == i % 2:
        if (int(cardnum[i]) * 2) < 10:
            checksum += (int(cardnum[i]) * 2)
        else:
            checksum += 1 + ((int(cardnum[i]) * 2) % 10)
    else:
        others += int(cardnum[i])

# If elif tree.
if (checksum + others) % 10 == 0:
    if (len(cardnum) == 15):
        if ((cardnum[0] == "3") and (cardnum[1] == "4" or cardnum[1] == "7")):
            print("AMEX")
    elif (len(cardnum) == 16):
        if (cardnum[0] == "5") and (int(cardnum[1]) > 0 and int(cardnum[1]) < 6):
            print("MASTERCARD")
        elif (cardnum[0] == "4"):
            print("VISA")
    elif (len(cardnum) == 13):
        if (cardnum[0] == "4"):
            print("VISA")
    else:
        print("INVALID")
else:
    print("INVALID")