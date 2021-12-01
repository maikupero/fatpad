// Declares a dictionary's functionality

#ifndef DICTIONARY_H
#define DICTIONARY_H

#include <stdbool.h>

// Maximum length for a word
// (e.g., pneumonoultramicroscopicsilicovolcanoconiosis)
#define LENGTH 45

// Prototypes
bool check(const char *word);   //string
unsigned int hash(const char *word);    //string
bool load(const char *dictionary);  //string
unsigned int size(void);
bool unload(void);

#endif // DICTIONARY_H
