# -------------------------------------------------------------------------------
# --------------------------- Enlightening solutions ----------------------------
# -------------------------------------------------------------------------------

# -------------------------------------------------------------------------------
# -------------------------------- My solution ----------------------------------
# -------------------------------------------------------------------------------

def decodeMorse(morse_code):
    morse_code = morse_code.split(' ')
    english = ""
    
    for i in range(len(morse_code)):
        if morse_code[i] != "":
            english += MORSE_CODE[morse_code[i]]
        else:
            if i > 0 and (morse_code[i-1] != morse_code[i]):
                english += ' '
    return english.strip()

test = decodeMorse('.... . -.--   .--- ..- -.. .')
expect = "HEY JUDE"
print(f"Tested: {test}\nExpect: {expect}")

# https://www.codewars.com/kata/54b724efac3d5402db00065e