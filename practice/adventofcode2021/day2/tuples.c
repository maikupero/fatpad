#include <stdio.h>
#include <string.h>

typedef struct {
    char direction[10];
    int distance;
} tuple;

int part1(tuple* mvmt, int siz)
{
	int vertical = 0;
	int horizontal = 0;

	for (int x = 0; x < siz; x++)
	{
		if (strcmp(mvmt[x].direction, "up") == 0)
		{
			vertical -= mvmt[x].distance;
		}
		else if (strcmp(mvmt[x].direction, "down") == 0)
		{
			vertical += mvmt[x].distance;
		}
		else
		{
			horizontal += mvmt[x].distance;
		}
	}

	return vertical * horizontal;
}


int part2(tuple* mvmt, int siz)
{
	int aim = 0;
	int vertical = 0;
	int horizontal = 0;

	for (int x = 0; x < siz; x++)
	{
		if (strcmp(mvmt[x].direction, "up") == 0)
		{
			aim -= mvmt[x].distance;
		}
		else if (strcmp(mvmt[x].direction, "down") == 0)
		{
            aim += mvmt[x].distance;
		}
		else
		{
			horizontal += mvmt[x].distance;
            vertical += aim * mvmt[x].distance;
		}
	}

	return vertical * horizontal;
}


int main(void)
{
	int i = 0;
	tuple mvmt[1000]; 

	while (fscanf(stdin, "%s %i", mvmt[i].direction, &mvmt[i].distance) == 2) i++;

    // for (int x = 0; x < 1000; x++)
    // {
    //     printf("direction[%i]: %s, /distance[%i]: %i\n", x, mvmt[x].direction, x, mvmt[x].distance);
    // }

	int first = part1(mvmt, 1000);
	int second = part2(mvmt, 1000);
	printf("Part 1: %i | ", first);
	printf("Part 2: %i\n", second);

	return 0;
}