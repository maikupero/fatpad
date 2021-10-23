#include <cs50.h>
#include <stdio.h>

void draw(int h);

int main(void)
{
    int height = get_int("height: ");
    draw(height);
}

void draw(int h)
{
    if (h == 0)
    {
        return;                     // <---- if no break point, it hits segmentation fault (infinite loop).
    }
    
    draw(h - 1);

    for (int i = 0; i < h; i++)
    {
        printf("#");
    }
    printf("\n");
}

// void draw(int h)
// {
//     for (int i = 1; i <= h; i++)
//     {
//         for (int j = 1; j <= i; j++)
//         {
//             printf("#");
//         }
//         printf("\n");
//     }
// }