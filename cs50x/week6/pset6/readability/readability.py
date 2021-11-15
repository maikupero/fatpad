from cs50 import get_string
import re
import string

# List of U and L letters, then list of punctuation to match to later.
alphabet = string.ascii_uppercase[:26] + string.ascii_lowercase[:26]

punctuation = [".", "!", "?"]

# Get input of text from user.
text = get_string("Input text here: ")

# Introduce our variables, and tally as we iterate through.
letters = 0
# Account for the last word of the text not having a space after it.
words = 1
sentences = 0

for i in range(len(text)):
    if text[i] in alphabet:
        letters += 1
    if (text[i] == " "):
        words += 1
    if text[i] in punctuation:
        sentences += 1

l = letters * 100 / words
s = sentences * 100 / words
index = round(0.0588 * l - 0.296 * s - 15.8)

if index < 1:
    print("Before Grade 1")
elif index > 15:
    print("Grade 16+")
else:
    print(f"Grade {index}")

    # Recall that the Coleman-Liau index:
    # is computed as 0.0588 * L - 0.296 * S - 15.8,
    # L is the average number of letters per 100 words in the text
    # S is the average number of sentences per 100 words in the text.

    # Count the number of letters, words, and sentences in the text.
    # A letter is any lowercase character from a to z or any uppercase character from A to Z,
    # A word is any sequence of characters separated by spaces.
    # Any occurrence of a period, exclamation point, or question mark indicates the end of a sentence.

    # Your program should print as output "Grade X" where X is
    # the grade level computed by the Coleman-Liau formula, rounded to the nearest integer.
    # If the resulting index number is 16 or higher your program should output "Grade 16+"
    # If the index number is less than 1, your program should output "Before Grade 1".