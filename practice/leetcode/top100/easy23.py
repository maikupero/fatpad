
# Definition for a binary tree node.
class Solution:
    
    # My solution
    def lengthOfLongestSubstring(s: str):
        longest = 0

        seen = {}
        start = 0
        for end in range(len(s)):
            
            if s[end] not in seen:
                longest = max(longest, end-start+1)

            else:
                if seen[s[end]] < start:
                    longest = max(longest, end-start+1)
                else:
                    start = seen[s[end]] + 1

            seen[s[end]] = end

        return longest
# Example cases:

test1 = "abcabcbb"
expected1 = 3
# Explanation: The answer is "abc", with the length of 3.

test2 = "bbbbb"
expected2 = 1
# Explanation: The answer is "b", with the length of 1.

test3 = "pwwkew"
expected3 = 3
# Explanation: The answer is "wke", with the length of 3.
# Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

 
# 3. Longest Substring Without Repeating Characters
# https://leetcode.com/problems/longest-substring-without-repeating-characters/
# Given a string s, find the length of the longest substring without repeating characters.

# Constraints:
# 0 <= s.length <= 5 * 104
# s consists of English letters, digits, symbols and spaces.