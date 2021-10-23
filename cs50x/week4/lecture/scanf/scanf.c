#include <stdio.h>

int main(void)
{
    char s[4]; // got to malloc, or s[4] allocate the bits as an array.
    printf("s: ");
    scanf("%s", s);
    printf("s: %s\n", s);
}

// int main(void)
// {
//     int x;
//     printf("x: ");
//     scanf("%i", &x);
//     printf("x: %i\n", x);
// }