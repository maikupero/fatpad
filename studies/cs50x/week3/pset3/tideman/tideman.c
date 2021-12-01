#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Max number of candidates
#define MAX 9

// preferences[i][j] is number of voters who prefer i over j
int preferences[MAX][MAX];

// locked[i][j] means i is locked in over j
bool locked[MAX][MAX];

// Each pair has a winner, loser
typedef struct
{
    int winner;
    int loser;
}
pair;

// Array of candidates
string candidates[MAX];
pair pairs[MAX * (MAX - 1) / 2];

int pair_count;
int candidate_count;

// Function prototypes
bool vote(int rank, string name, int ranks[]);
void record_preferences(int ranks[]);
void add_pairs(void);
void sort_pairs(void);
void lock_pairs(void);
void print_winner(void);
bool checkCycle(int loser, int winner);

int main(int argc, string argv[])
{
    // Check for invalid usage
    if (argc < 2)
    {
        printf("Usage: tideman [candidate ...]\n");
        return 1;
    }

    // Populate array of candidates
    candidate_count = argc - 1;
    if (candidate_count > MAX)
    {
        printf("Maximum number of candidates is %i\n", MAX);
        return 2;
    }
    for (int i = 0; i < candidate_count; i++)
    {
        candidates[i] = argv[i + 1];
    }

    // Clear graph of locked in pairs
    for (int i = 0; i < candidate_count; i++)
    {
        for (int j = 0; j < candidate_count; j++)
        {
            locked[i][j] = false;
        }
    }

    pair_count = 0;
    int voter_count = get_int("Number of voters: ");

    // Query for votes
    for (int i = 0; i < voter_count; i++)
    {
        // ranks[i] is voter's ith preference
        int ranks[candidate_count];

        // Query for each rank
        for (int j = 0; j < candidate_count; j++)
        {
            string name = get_string("Rank %i: ", j + 1);

            if (!vote(j, name, ranks))
            {
                printf("Invalid vote.\n");
                return 3;
            }
        }

        //Prints each voter's ranking array to scale with candidate count
        printf("Voter %i: [", i);
        for (int x = 0; x < candidate_count; x++)
        {
            printf(" %d", ranks[x]);
        }
        printf(" ]\n\n");

        record_preferences(ranks);
    }
    //Prints preferences grid to scale with candidate count
    for (int x = 0; x < candidate_count; x++)
    {
        printf("Prefer %i:", x);
        for (int y = 0; y < candidate_count; y++)
        {
            printf(" %i", preferences[x][y]);
        }
        printf("\n");
    }
    printf("\n");

    //Prints each pairing
    add_pairs();
    printf("Pairs: %i\n", pair_count);
    for (int z = 0; z < pair_count; z++)
    {
        printf("%i: (%i, %i)\n", z, pairs[z].winner, pairs[z].loser);
    }

    //Print the pairs sorted by the winning vote count.
    sort_pairs();
    printf("\nSorted Pairs:\n");
    for (int j = 0; j < pair_count; j++)
    {
        printf("%s > %s\n", candidates[pairs[j].winner], candidates[pairs[j].loser]);
    }

    //Locks pairs to the graph. And prints the graph.
    lock_pairs();
    printf("\nLocked pairs graph:\n");
    for (int x = 0; x < candidate_count; x++)
    {
        for (int y = 0; y < candidate_count; y++)
        {
            printf("%i ", locked[x][y]);
        }
        printf("\n");
    }

    print_winner();
    return 0;
}

// Update ranks given a new vote
bool vote(int rank, string name, int ranks[])
{
    for (int i = 0; i < candidate_count; i++)
    {
        if (strcmp(name, candidates[i]) == 0)
        {
            ranks[rank] = i;
            return true;
        }
    }
    return false;
}

// Update preferences given one voter's ranks
void record_preferences(int ranks[])
{
    for (int i = 0; i < candidate_count; i++)
    {
        for (int j = i + 1; j < candidate_count; j++)
        {
            preferences[ranks[i]][ranks[j]] ++;
        }
    }
    return;
}

// Record pairs of candidates where one is preferred over the other
void add_pairs(void)
{
    for (int i = 0; i < candidate_count; i++)
    {
        for (int j = i + 1; j < candidate_count; j++)
        {
            if (preferences[i][j] > preferences[j][i])
            {
                pairs[pair_count].winner = i;
                pairs[pair_count].loser = j;
                pair_count++;
            }
            else if (preferences[i][j] < preferences[j][i])
            {
                pairs[pair_count].winner = j;
                pairs[pair_count].loser = i;
                pair_count++;
            }
        }
    }
    return;
}

// Sort pairs in decreasing order by strength of victory - Bubble sort
void sort_pairs(void)
{
    pair swap;
    int counter = -1;
    while (counter != 0)
    {
        counter = 0;
        for (int i = 0; i < pair_count - 1; i++)
        {
            if ((preferences[pairs[i].winner][pairs[i].loser] - preferences[pairs[i].loser][pairs[i].winner]) <
                (preferences[pairs[i + 1].winner][pairs[i + 1].loser] - preferences[pairs[i + 1].loser][pairs[i + 1].winner]))
            {
                swap = pairs[i];
                pairs[i] = pairs[i + 1];
                pairs[i + 1] = swap;
                counter++;
            }
        }
    }
    return;
}

// Lock pairs into the candidate graph in order, without creating cycles
void lock_pairs(void)
{
    // For every pair check the locked grid for if our pair's loser is a winner
    for (int i = 0; i < pair_count; i++)
    {
        if (!checkCycle(pairs[i].loser, pairs[i].winner))
        {
            locked[pairs[i].winner][pairs[i].loser] = 1;
        }
    }
    return;
}

bool checkCycle(int loser, int winner)
{
    if (locked[loser][winner])
    {
        return true;
    }

    for (int i = 0; i < candidate_count; i++)
    {
        if (locked[loser][i])
        {
            if (checkCycle(i, winner))
            {
                return true;
            }
        }
    }

    return false;
}

// Print the winner of the election
void print_winner(void)
{
    int counter;
    for (int y = 0; y < candidate_count; y++)
    {
        counter = 0;
        for (int x = 0; x < candidate_count; x++)
            if (locked[x][y] == 0)
            {
                counter++;
            }

        if (counter == candidate_count)
        {
            printf("%s\n", candidates[y]);
        }
    }

    return;
}