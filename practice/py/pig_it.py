# -------------------------------------------------------------------------------
# --------------------------- Enlightening solutions ----------------------------
# -------------------------------------------------------------------------------

# -------------------------------------------------------------------------------
# -------------------------------- My solution ----------------------------------
# -------------------------------------------------------------------------------
# First intuition: make dicts, return the key with count of 1.

def pigword(word):
    if (word[0].isalpha()):
        if len(word) > 1:
            return word[1:] + word[0] + 'ay'
        else:
            return word + 'ay'
    else:
        return word

def pig_it(text):
    text = text.split(' ')
    result = list(map(pigword, text))
    return " ".join(result)

test = pig_it('Pig latin is cool')
expect = 'igPay atinlay siay oolcay'
test2 = pig_it('Hello world !')
expect2 = 'elloHay orldway !'
print(f"Tested: {test}\nExpect: {expect}")
print(f"Tested: {test2}\nExpect: {expect2}")

# Move the first letter of each word to the end of it, 
# then add "ay" to the end of the word. Leave punctuation marks untouched.

# https://www.codewars.com/kata/520b9d2ad5c005041100000f/python