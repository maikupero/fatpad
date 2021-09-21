#include <stdio.h>
#include <cs50.h>

int main(void)
{
    for (int i = 0; i < 10; i++)
    {
        for (int j = 0; j < 10; j++)
        {
            printf("#");
        }
        printf("\n");
    }
}

/*
int main(void)
{
    //Get Posi Int from user
    int n;
    do
    {
        n = get_int("Width: ");
    }
    while (n < 1);
    
    //Print out that many question marks
    for (int i = 0; i < n; i++)
    {
        printf("?");
    }
    printf("\n");
}
*/

/*
int main(void)
{
    for (int i = 0; i < 4; i++)
    {
        printf("?");
    }
    printf("\n");
}
*/