#include <stdio.h>
#include <cs50.h>

int main(void)
{
    char *s = "HI!";

    for (int i = 0; i < 100; i++)
    {
        printf("%c | %p\n", *(s + i), &s[i]);
    }
}

// int main(void)
// {
//     string s = "HI!";
//     printf("%p\n", &s[0]);
//     printf("%p\n", &s[1]);
//     printf("%p\n", &s[2]);
// }

// int main(void)
// {
// int n = 50;
// int *p = &n;

// printf("%i\n", *p);
// }