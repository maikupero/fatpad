// Implements a dictionary's functionality
#include <stdbool.h>
#include "dictionary.h"

// My #includes
#include <string.h>
#include <strings.h>
#include <stdlib.h>
#include <stdio.h>
#include <ctype.h>
#include <math.h>

// Represents a node in a hash table
typedef struct node
{
    char word[LENGTH + 1];
    struct node *next;
}
node;

// Number of buckets in hash table - first three letters, with apostrophes.
const int COMPLEXITY = 10;
const unsigned int N = 143091 / COMPLEXITY;

// Hash table each element in the array is a pointer to a node (to a linked list)
node *table[N];

// Introduce counter to keep track of the number of items in the dictionary
unsigned int wordcount = 0;

// Loads dictionary into memory, returning true if successful, else false
bool load(const char *dictionary)
{
    for (int i = 0; i < N; i++)
    {
        table[i] = NULL;
    }

    // Introduce our hashnum key to be updated for each word.
    unsigned int hashnum = 0;

    // Show the number of buckets we're working with.
    // printf("# of buckets: %i\n", N);

    // Open up the dictionary file
    FILE *dict = fopen(dictionary, "r");
    if (dict == NULL)
    {
        return false;
    }

    // Placeholder node for when we need to insert into linked lists.
    node *n = malloc(sizeof(node));
    if (n == NULL)
    {
        return false;
    }

    // Read strings from the file one word at a time, store in a node's word property.
    while (fscanf(dict, "%s", n->word) != EOF)
    {
        // Get our hash key.
        hashnum = hash(n->word);

        //Keep track of number of loops to get size of dictionary
        wordcount += 1;

        // Our new node.
        node *s = malloc(sizeof(node));
        if (s == NULL)
        {
            return false;
        }
        strcpy(s->word, n->word);

        // If there's no word - no need to introduce 10000 pointers. Make a table of head nodes.
        // But having trouble with this checking if the head node is empty.
        if (table[hashnum] == NULL)
        {
            table[hashnum] = malloc(sizeof(node));
            table[hashnum]->next = s;
            s->next = NULL;
        }
        // Make sure pointers are assigned in the right order.
        else
        {
            s->next = table[hashnum]->next;
            table[hashnum]->next = s;
        }
    }

    // Check for making the linked lists properly.

    free(n);
    fclose(dict);
    return true;
}

// Hashes word to a number - takes a string, returns an index.
unsigned int hash(const char *word)
{
    int counter = 0;
    int hashnum = 0;
    int multiplier;

    for (int i = 0; i < strlen(word); i++)
    {
        multiplier = pow(27, i);

        if (word[i] == '\'')
        {
            counter = 26;
        }
        else
        {
            counter = tolower(word[i]) - 97;
        }
        hashnum += (counter * multiplier);
    }
    hashnum = hashnum % N;
    return hashnum;
}

// Returns true if word is in dictionary, else false
bool check(const char *word)
{
    printf("Word is: %s\n", word);
    unsigned int hashnum = 0;
    hashnum = hash(word);
    printf("Check hash: %u\n", hashnum);

    if (table[hashnum] != NULL)
    {
        node *search;
        search = table[hashnum]->next;
        do
        {
            printf("%s W||D %s\n", word, search->word);
            if (strcasecmp(word, search->word) == 0)
            {
                printf("________TRUE________\n\n");
                return true;
            }
            search = search->next;
        } while (search != NULL);                           //HERE
    }
    printf("________FALSE________\n\n");

    return false;
}

// Returns number of words in dictionary if loaded, else 0 if not yet loaded
unsigned int size(void)
{
    return wordcount;
}

// Unloads dictionary from memory, returning true if successful, else false

bool unload(void)
{
    node *tmp;

    for (int i = 0; i < N; i++)
    {
        while (table[i] != NULL)                    //HERE
        {
            tmp = table[i];
            table[i] = table[i]->next;
            free(tmp);
        }
    }

    return true;
}

