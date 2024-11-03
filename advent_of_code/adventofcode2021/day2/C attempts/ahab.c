#include <stdio.h>

int main(void)
{
    FILE *input = fopen("input", "r");

    char c;
    int xy[2] = {0, 0};

    char word[16];
    char index = 0;

    while(fread(&c, sizeof(char), 1, input))
    {
        if(c == '\n')
        {
            word[index] = '\0';
            if(word[0] == 'f')
            {
                xy[0] += word[8] - '0';
            }
            else if(word[0] =='d')
            {
                xy[1] += word[5] - '0';
            }
            else if(word[0] == 'u')
            {
                xy[1] -= word[3] - '0';
            }

            index = 0;
        }

        else
        {
            word[index] = c;
            index++;
        }
    }

    printf("%i forward, %i down.\n", xy[0], xy[1]);
} 