#include <stdio.h>
#include <stdlib.h>

// Valgrind doesn't seem to work on MacOS 10.15 or later. So working on cs50 IDE.

int main(void)
{
    char *s = malloc(3); //4
    s[0] = 'H';
    s[1] = 'I';
    s[2] = '!';
    s[3] = '\0';
    printf("%s\n", s);
    // free(s);
}