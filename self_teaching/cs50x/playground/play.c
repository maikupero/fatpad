#include <stdio.h>
#include <math.h>
#include <string.h>

int main(void)
{
    int jpgnum = -1;
    char *filename;

    while (jpgnum < 30)
    {
        jpgnum += 1;
        while (strlen(filename) < 3)
        {
            sprintf(filename, jpgnum);
        }
        printf("Filename = %s.jpg", filename);
    }
}