#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(void)
{
    char *s = get_string("s: ");

    char *t = malloc(strlen(s) + 1);

    if (t == NULL)
    {
        return 1;
    }
    
    // strcpy(s, t);

    for (int i = 0, n = strlen(s); i < n + 1; i++)
    {
        t[i] = s[i];
        // *(t+i) = *(s+i);
    }

    if (strlen(t) > 0)
    {
        t[0] = toupper(t[0]);
        //  *t = toupper(*t);
    }


    printf("s: %s\n", s);
    printf("t: %s\n", t);

    // Single biggest reason for bugs in C.
    free(t);
}

// int main(void)
// {
//     char *s = get_string("s: ");

//     char *t = s;

//     t[0] = toupper(t[0]);

//     printf("s: %s\n", s);
//     printf("t: %s\n", t);
// }