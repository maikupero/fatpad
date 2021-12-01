#include <stdio.h>
#include <stdlib.h>

#include "test.txt"

int main(void)
{
    // Allocate just initial memory for list. Will reallocate as we go.
    unsigned int *depths = malloc(sizeof(int));
    int i;
    printf("Initial size of array %i", sizeof(depths));

    // Read through data.txt, store temporary ints in i, realloc memory for an int.
    FILE *data;
    data = fopen("test.txt", "r");

    while(!feof(data))
    {
        fscanf(data, "%c", &depths[i]);
        printf("Value of i: %i", i);

        depths = realloc(depths, sizeof(depths) + sizeof(int));
        printf("%d", depths[i]);
    }
     
    fclose(data);
    return 0;
}

// Note that you can do this in a single pass by using realloc as you go: 
// read numbers in a loop into a temporary int, and for each successful read 
// expand the num array by one by calling realloc. This will expand the buffer as needed, 
// and you would not need to rewind.

// Be careful to check the results of realloc before re-assigning to num to avoid memory leaks.




// int main(void)
// {
//     int depth;

//     FILE *data = fopen("data.txt", "r");
//     if (data == NULL)
//     {
//         printf("Could not open the file");
//         return 1;
//     }
    
//     fscanf(data, "%i", &depth);

//     printf("%i", depth);

//     fclose(data);
// }

// while (!feof (data))
// {  
//     printf ("%d ", depth);
//     fscanf (data, "%d", &depth);      
// }

// int read_data()
// {
//     int i;
//     unsigned int lines = 0;
//     unsigned int *depths;
//     char ch;
//     FILE *data = fopen("data.txt", "r");

//     //Count line numbers for memory allocation
//     while(!feof(data))
//     {
//         ch = fgetc(data);
//         if (ch == '\n'){
//             lines++;
//         }
//     }
//     printf("Lines: %i", lines);

//     //array size will be lines+1
//     depths = malloc(sizeof(int)*(lines+1));

//     //storing random_numbers in num vector
//     for (i = 0; i < lines + 1; i++)
//     {
//         fscanf(data, "%d", &depths[i]);
//         printf("%d", depths[i]);
//     }
    
//     fclose(data);
// }
// fseek(file, 0, SEEK_SET);
