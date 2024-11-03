// ------------------ String Ends With? ------------------
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

#include <string>
bool solution(std::string const &str, std::string const &ending) {
    return true;
}

Assert::That(solution("abcde", "cde"), Equals(true));
Assert::That(solution("abcde", "abc"), Equals(false));
Assert::That(solution("abc", ""), Equals(true));

// Complete the solution so that it returns true if the first argument(string) 
// passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//Test:
// #include <iostream>

// using namespace std;

// int main()
// {
//     cout << "Hello World" << endl;
// }