// Summary
var longestPalindrome = function(s) {
    let longest = '';
    
    for (let i = 0; i < s.length; i++) {
        // palindrome can center around 1 or 2 letters, try 1 first.
        const current1 = findLongestPalindrome(s, i, i);
        const current2 = findLongestPalindrome(s, i, i + 1);
        const longerPalindrome = 
              current1.length > current2.length ? current1 : current2;
        if (longerPalindrome.length > longest.length) {
            longest = longerPalindrome;
        } 
    }
    return longest;

    function findLongestPalindrome(str, i, j) {
        while(i >= 0 && j < str.length && str[i] === str[j]) {
            i -= 1;
            j += 1;
        }
        // slice the qualified substring from the second last iteration
        return str.slice(i + 1, j);
    }
};

// My solution: 
// Kept failing on exceptions. Probably a cleaner way to do it.
var longestPalindrome2 = function(s) {
    if (s.length < 2) return s
    
    let longest = "", current = "";

    for (let i = 0; i < s.length-1; i++) {
        if (s[i-1] === s[i+1]) {
            current = checkLength(s, i-1, i+1)
        } else if (s[i] === s[i+1]) {
            current = checkLength(s, i, i+1)
        } else current = s[i]

        console.log(i, current)
        if (current.length > longest.length) {
            longest = current;
        }
    }

    return longest

    function checkLength(s, left, right) {
        palindrome = s.substring(left, right+1);
        while ((left >= 0) && (right <= s.length-1)) {
            right++;
            left--;
            if ((s[right]) && (s[left]) && (s[right] === s[left])) {
                palindrome = s[left] + palindrome + s[right]
            }
        } 
        return palindrome
    }
};

test1 = "babad"
expected1 = "bab"
// Explanation: "aba" is also a valid answer.

test2 = "cbbd"
expected2 = "bb"
console.log(longestPalindrome("bb"));
console.log(longestPalindrome("babadab"));
console.log(longestPalindrome("gteaiompopoapaopopmbam"));
console.log(longestPalindrome("cbbdd"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("ccc"));

// 5. Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/
// Given a string s, return the longest palindromic substring in s.

// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters.