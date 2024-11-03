#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Prompt for start size
    int start = 0;
    do
    {
        start = get_int("What's the starting population size? ");
    }
    while (start < 9);
    
    // Prompt for end size
    int end = 0;
    do 
    {
        end = get_int("What's the ending population size? ");
    }
    while (end < start);
    
    // Calculate number of years until we reach threshold
    int years = 0;
    while (start < end) 
    {
        start = start + (start / 3) - (start / 4);
        years += 1;
    }
    
    // Print number of years
    printf("Years: %i\n", years);
    // if (years == 1)
    // {
    //     printf("It'll take %i year.\n", years);
    // }
    // else 
    // {
    // printf("It'll take %i years.\n", years);
    // }
}