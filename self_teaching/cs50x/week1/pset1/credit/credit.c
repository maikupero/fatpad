#include <stdio.h>
#include <cs50.h>

//For some reason, I tried to do this purely with modulos and without using arrays.
int main(void)
{
    // Ask user for their card number (kinda sketchy)
    long card_number = get_long("Card Number: ");
    // printf("You gave me %li\n", card_number);

    // Checksum - Introduce our variables
    int sum = 0;
    int length = 0;
    //Save the number to get the first two digits later, once we have the length.
    long first_two = card_number;

    //Add every last digit, every other one being multiplied by two.
    while (card_number > 0)
    {
        if (length % 2 == 0)
        {
            sum += card_number % 10;
        }
        //If last digit is 5 (leading to a double digit), break it into two digits.
        else
        {
            if (card_number % 10 > 4)
            {
                sum += 1 + ((card_number % 10 * 2) % 10);
            }
            else
            {
                sum += card_number % 10 * 2;
            }
        }
        //Remove the last digit and add one to length.
        card_number -= card_number % 10;
        card_number /= 10;
        length += 1;
        // printf("Card number: %li\n", card_number);
        // printf("Length: %i\n", length);
    }
    // printf("You got %i.\n", sum);
    for (int x = length; x > 2; x--)
    {
        first_two -= first_two % 10;
        first_two /= 10;
    }
    // printf("First two digits is %li.\n", first_two);
    if (sum % 10 == 0 && (12 < length))
    {
        if (length == 15)
        {
            if (first_two == 34 || first_two == 37)
            {
                printf("AMEX\n");
            }
            else
            {
                printf("INVALID\n");
            }
        }
        else if (length == 13)
        {
            if ((first_two - first_two % 10) / 10 == 4)
            {
                printf("VISA\n");
            }
            else
            {
                printf("INVALID\n");
            }
        }
        else if (length == 16)
        {
            if (first_two > 50 && first_two < 56)
            {
                printf("MASTERCARD\n");
            }
            else if ((first_two - first_two % 10) / 10 == 4)
            {
                printf("VISA\n");
            }
            else
            {
                printf("INVALID\n");
            }
        }
    }
    else
    {
        printf("INVALID\n");
    }
    return 0;
}