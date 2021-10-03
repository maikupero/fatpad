#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

bool validarg();

int main(int argc, string argv[])
//Accepts only one argument of 26 alphabetic characters. Otherwise (at the bottom) breaks to an error and clarifies the required arguments.
{
    if (argc == 2 && validarg(argv[1]) == true)
    {
        //Gets input of plaintext from user, and loops through converting each letter and preserving case.
        string input = get_string("plaintext: ");
        //Prompts the output of ciphertext and initiates a forloop through the plaintext input.
        printf("ciphertext: ");
        for (int i = 0; i < strlen(input); i++)
        {
            if (input[i] >= 65 && input[i] <= 90)
            {
                input[i] = toupper(argv[1][(input[i] - 65)]);
                printf("%c", input[i]);
            }
            else if (input[i] >= 97 && input[i] <= 122)
            {
                input[i] = tolower(argv[1][(input[i] - 97)]);
                printf("%c", input[i]);
            }
            else
            {
                printf("%c", input[i]);
            }
        }
        printf("\n");
        return 0;
    }
    else if (argc == 2 && strlen(argv[1]) != 26)
    {
        printf("Key must contain 26 alphabetic characters.\n");
        return 1;
    }
    else
    {
        printf("Usage: ./substitution key\n");
        return 1;
    }
}

bool validarg(string key)
{
    //Add up all the letters as if they are uppercase to check for duplicates.
    int sum = 0;
    for (int i = 0; i < 26; i++)
    {
        sum += toupper(key[i]);
    }
    printf("%i\n", sum);
    // Compare to expected sum and also check if the key contains exactly 26 letters.
    if (sum == 2015 && strlen(key) == 26)
    {
        return true;
    }
    else
    {
        return false;
    }
}