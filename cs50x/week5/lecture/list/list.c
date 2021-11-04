#include <stdio.h>
#include <stdlib.h>
//With linked lists
typedef struct node
{
    int number;
    struct node *next;
}
node;

int main(void)
{
    node *list = NULL;

    node *n = malloc(sizeof(node));
    if (n == NULL)
    {
        return 1;
    }
    n->number = 1;
    n->next = NULL;
    list = n;

    n = malloc(sizeof(node));
    if (n == NULL)
    {
        free(list);
        return 1;
    }
    n->number = 2;
    n->next = NULL;
    list->next = n;

    n = malloc(sizeof(node));
    if (n == NULL)
    {
        free(list->next);
        free(list);
        return 1;
    }
    n->number = 3;
    n->next = NULL;
    list->next->next = n;

    for (node *tmp = list; tmp != NULL; tmp = tmp->next)
    {
        printf("%i\n", tmp->number);
    }

    while (list != NULL)
    {
        node *tmp = list->next;
        free(list);
        list = tmp;
    }
}

// With arrays and malloc
// int main(void)
// {
//     int *list = malloc(3 * sizeof(int));
//     if (list == NULL)
//     {
//         free(list);
//         return 1;
//     }

//     //     // Can treat it as an array since it is a congtiguous chunk of memory.
//     list[0] = 1;
//     list[1] = 2;
//     list[2] = 3;
//     //     // Or, but not cool.
//     // *list = 1;
//     // *(list+1) = 2;
//     // *(list+2) = 3;

//         // Here we could do
//         // list as address of chunk of memory already allocated..
//         //int *tmp = realloc(list, 4 * sizeof(int));
//     int *tmp = malloc(4 * sizeof(int));
//     if (tmp == NULL)
//     {
//         free(tmp);
//         return 1;
//     }

//         //If doing that, this part is unnecessary. Copies it for you.
//     for (int i = 0; i < 3; i++)
//     {
//         tmp[i] = list[i];
//     }

//     tmp[3] = 4;

//     free(list);
    
//     list = tmp;

//     for (int i = 0; i < 4; i++)
//     {
//         printf("%i\n", list[i]);
//     }

//     free(list);
// }