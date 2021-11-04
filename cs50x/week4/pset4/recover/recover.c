#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdint.h>

// Generated files to be named ###.jpg, starting with 000 for the first image and counting up.
// Your program, if it uses malloc, must not leak any memory.

// First 3 bytes of a jpeg: 0xff 0xd8 0xff
// Fourth bytes first 4 bits are 1110, or 0xe. so look for ffd8ffe_

// Data Types
typedef uint8_t BYTE;

// Function Prototypes
char* namejpg(int jpgnum, char* front);
int checkblock(BYTE* buffer);

int main(int argc, char* argv[])
{
    // Variables for generating .jpg file names.
    int jpgnum = -1;
    char* filename;

    // Should accept exactly one argument.
    if (argc > 2)
    {
        printf("Usage: ./recover filename.ext\n");
        return 1;
    }

    // Open memory card.
    FILE* memcard = fopen(argv[1], "r");

    // If it cannot be opened, send error message.
    if (memcard == NULL)
    {
        printf("Could not open %s.\n", argv[1]);
        return 1;
    }

    //Parse through by blocks (of 512 bytes)
    BYTE buffer[512];
    FILE* destination = NULL;
    char front[8];

    while (fread(buffer, sizeof(BYTE), 512, memcard))
    {
        // Check for jpg header: ffd8ffe_
        if (checkblock(buffer))
        {
            // Close old file
            if (destination != NULL)
            {
                fclose(destination);
            }
            // Generate name for new .jpg, and open a new file.
            jpgnum += 1;
            // Need namejpg(jpgnum) to work like namejpg(2) -> 002 + .jpg
            front[0] = '\0';
            filename = namejpg(jpgnum, front);
            strcat(filename, ".jpg");
            destination = fopen(filename, "w");
        }
        // Write a block to current destination
        if (filename)
        {
            fwrite(buffer, sizeof(BYTE), 512, destination);
        }
    }

    // Close files
    fclose(memcard);
    fclose(destination);
    return 0;
}

char* namejpg(int jpgnum, char* front)
{
    char back[4];
    sprintf(back, "%i", jpgnum);
    printf("back: %s\n", back);
    for (int i = 3; i > strlen(back); i--)
    {
        strcat(front, "0");
    }
    strcat(front, back);
    printf("front: %s", front);
    return front;
}

int checkblock(BYTE* buffer)
{
    const int jpgheader[4] = { 0xff, 0xd8, 0xff, 0xe0 };
    const int mask = 0xf0;

    for (int i = 0; i < 3; i++)
    {
        if (buffer[i] != jpgheader[i])
        {
            return 0;
        }
    }

    return ((buffer[3] & mask) == (jpgheader[3]));
}