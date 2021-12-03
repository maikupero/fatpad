#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXSIZE 1000

int part1(char* direction[], int count, int distance)
{
	int vertical = 0;
	int horizontal = 0;

	for (int x = 0; x < MAXSIZE; x++)
	{
		if (strcmp(direction[x], "up") == 0)
		{
			vertical -= distance[x];
		}
		else if (strcmp(direction[x], "down") == 0)
		{
			vertical += distance[x];
		}
		else
		{
			horizontal += distance[x];
		}
	}

	return vertical * horizontal;
}


int part2(char* direction[], int count, int distance)
{
	int aim = 0;
	int vertical = 0;
	int horizontal = 0;

	for (int x = 0; x < MAXSIZE; x++)
	{
		if (strcmp(direction[x], "up") == 0)
		{
			aim -= distance[x];
			vertical += aim * distance[x];
		}
		else if (strcmp(direction[x], "down") == 0)
		{
			vertical += distance[x];
		}
		else
		{
			horizontal += distance[x];
		}
	}

	return vertical * horizontal;
}


int main(void)
{
	int i = 0;
	char direction[MAXSIZE][10];
	int distance[MAXSIZE];

	while (fscanf(stdin, "%s %i", direction[i], &distance[i]) == 2) i++;

	int first = part1(direction, MAXSIZE, distance);
	int second = part2(direction, MAXSIZE, distance);
	printf("Part 1: %i | ", first);
	printf("Part 2: %i\n", second);

	return 0;
}

// TWO OTHER VERSIONS OF THE FSCANF
// int main()
// {
// 	int i = 0;
// 	int j = 0;
// 	int distance[MAXSIZE];
//     char direction[MAXSIZE][10];
// 	while (fscanf(stdin, "%s %i", direction[i++], &distance[j++]) == 2);

// 	for (int x = 0; x < MAXSIZE; x++)
// 	{
// 		printf("Direction[%i]: %s || Distance[%i]: %i\n", x, direction[x], x, distance[x]);
// 	}

// 	return 0;
// }

// int main()
// {
// 	int i = 0;
// 	int distance[MAXSIZE];
//     char direction[MAXSIZE][10];

// 	while (fscanf(stdin, "%s %i", direction[i], &distance[i]) == 2)
// 	{
// 		printf("Direction[%i]: %s || Distance[%i]: %i\n", i, direction[i], i, distance[i]);
// 		i++;
// 	}

// 	return 0;
// }

// Part 1: 1746616, Part 2: 1741971043

