#include <stdio.h>
#include <math.h>

int main(void)
{
    int i = 5 / 2.0;
    printf("%d\n", i);
    i = round(i);
    printf("%i\n", i);
    printf("type: %s", typeof i);
}