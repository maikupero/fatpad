#include <stdio.h>
#include <string.h>

int func(char** direction, int count)
{
    printf("direction[0]: %s\n", direction[0]);
    return 0;
}

int func2(int* distance)
{
    printf("distance[0]: %d\n", distance[0]);
    return 0;
}

int main(void)
{
    int i = 0;
    int distance[2];
    char direction[10][2];

	while (fscanf(stdin, "%s %i", direction[i], &distance[i]) == 2)
    {
        printf("Direction: %s ||| ", direction[i]);
        printf("Distance: %i\n", distance[i]);
        i++;
    }
    func2(distance);
    func(direction, 2);
   

	return 0;
}

Part 1: 1746616, Part 2: 1741971043

