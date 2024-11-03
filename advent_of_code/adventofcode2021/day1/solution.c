#include <stdio.h>

#define MAXSIZE 2000

int part1(int *depths)
{
    int counter = 0;
    for (int x = 1; x < MAXSIZE + 1; x++)
    {
        if (depths[x] > depths[x - 1])
        {
            counter++;
        }
    }
    return counter;
}


int part2(int *depths)
{
    int counter = 0;
    for (int x = 3; x < MAXSIZE + 1; x++)
    {
        int next = depths[x] + depths[x-1] + depths[x-2];
        int current = depths[x-1] + depths[x-2] + depths[x-3];
        if (next > current)
        {
            counter++;
        }
    }
    return counter;
}


int main()
{
	int depths[MAXSIZE];
	int i = 0;

	while (fscanf(stdin, "%d", &depths[i++]) == 1);

	int first = part1(depths);
	unsigned int second = part2(depths);
	printf("Part 1: %d, ", first);
	printf("Part 2: %d\n", second);

	return 0;
}

