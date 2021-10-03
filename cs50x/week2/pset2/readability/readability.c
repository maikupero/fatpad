#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <math.h>

// Your program must prompt the user for a string of text (using get_string).
int main(void)
{
    //Get our data
    string s = get_string("Text: ");
    //Introduce our 3 variables - arrays, where we'll store our data as we parse through.
    float sentences = 0;
    float words = 0;
    float letters = 0;

    //Parse through every letter of our text
    for (int i = 0, n = strlen(s); i < n; i++)
    {
        //If an uppercase or lowercase letter, count it.
        if ((s[i] >= 65 && s[i] <= 90) || (s[i] >= 97 && s[i] <= 122))
        {
            letters += 1;
        }
        //If a '_.?!' count a new word.
        if (s[i] == 32 || s[i] == 33 || s[i] == 46 || s[i] == 63)
        {
            words += 1;
            //If one of the latter three, count a new sentence. Skip the following space.
            if (s[i] > 32)
            {
                sentences += 1;
                i += 1;
            }
        }
    }

    float L = letters * 100 / words;
    float S = sentences * 100 / words;
    float index = round(0.0588 * L - 0.296 * S - 15.8);

    if (index >= 16)
    {
        printf("Grade 16+\n");
    }
    else if (index < 1)
    {
        printf("Before Grade 1\n");
    }
    else
    {
        printf("Grade %i\n", (int) index);
    }
}

// Your program should count the number of letters, words, and sentences in the text.
// You may assume that a letter is any lowercase character from a to z or any uppercase character from A to Z,
// any sequence of characters separated by spaces should count as a word, and that any occurrence of a period,
// exclamation point, or question mark indicates the end of a sentence.

// Your program should print as output "Grade X" where X is the grade level computed by the Coleman-Liau formula, rounded to the nearest integer.

// If the resulting index number is 16 or higher (equivalent to or greater than a senior undergraduate reading level), your program should output "Grade 16+" instead of giving the exact index number. If the index number is less than 1, your program should output "Before Grade 1".