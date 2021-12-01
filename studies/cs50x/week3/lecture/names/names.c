#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string names[] = {"Bill", "Charlie", "Fred", "George", "Ginny", "Percy", "Ron"};

    for (int i = 0; i < 7; i++)
    {
        if (strcmp(names[i], "Ron") == 0)
        {
            printf("Found\n");
            return 0;
        }
    }
    printf("Not found\n");
    return 1;
}

// When comparing strings in C, must use strcmp. Compares by ascii values.
// If the first comes before the second, negative, match, 0, after, positive.
// Remember that strings in C (arrays) always end in \0 as the last character, to know when they end.
// With booleans, only 0 is considered false. All other returns will be true.