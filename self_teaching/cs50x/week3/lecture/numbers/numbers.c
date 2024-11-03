#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int target = get_int("Search for: ");

    int numbers[] = {4, 6, 8, 2, 7, 5, 0};

    for (int i = 0; i < 7; i++)
    {
        if (numbers[i] == target)
        {
            printf("Found at position %i.\n", i);
            return 0;
        }
    }
    printf("Not found.\n");
    return 1;
}