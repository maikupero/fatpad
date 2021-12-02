#include <stdio.h>

#define LINE 10

// typedef struct mvmt_struct {
//     char *key;
//     int *value;
//     struct mvmt_struct *next;
// } mvmt;

int part1(char *movements)
{
    int vertical = 0;
    int horizontal = 0;

    
    return movements[0];
}


int part2(char *movements)
{
    return movements[1];
}


int main()
{
	char *movements[LINE];
	int i = 0;

	while (fscanf(stdin, "%d", &movements[i++]) == 1);

	int first = part1(movements);
	unsigned int second = part2(movements);
	printf("Part 1: %d, ", first);
	printf("Part 2: %d\n", second);

	return 0;
}

// Part 1: 1746616, Part 2: 1741971043

