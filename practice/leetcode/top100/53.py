# https://leetcode.com/problems/longest-consecutive-sequence/discuss/41057/Simple-O(n)-with-Explanation-Just-walk-each-streak

# First turn the input into a set of numbers. 
# That takes O(n) and then we can ask in O(1) whether we have a certain number.
# Then go through the numbers. 
# If the number x is the start of a streak (i.e., x-1 is not in the set), 
# then test y = x+1, x+2, x+3, ... and stop at the first number y not in the set. 
# The length of the streak is then simply y-x and we update our global best with that. 
# Since we check each streak only once, this is overall O(n).

class Solution:
    def longestConsecutive(nums):
        nums = set(nums)
        longest = 0
        for x in nums:
            # Only check if there it is the start of a sequence (no preceding value)
            if (x-1) not in nums:
                # If no second value, y-x = 1 (1 length sequence)
                y = x + 1
                while y in nums:
                    y += 1
                longest = max(longest, y-x)
        return longest


test1 = [100,4,200,1,3,2]
expected1 = 4
# Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
test2 = [0,3,7,2,5,8,4,6,0,1]
expected2 = 9
 
print(f"Testing {test1} returns {Solution.longestConsecutive(test1)} expected {expected1}")
print(f"Testing {test2} returns {Solution.longestConsecutive(test2)} expected {expected2}")

# 128. Longest Consecutive Sequence
# https://leetcode.com/problems/longest-consecutive-sequence/
# Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
# You must write an algorithm that runs in O(n) time.

# Constraints:
# 0 <= nums.length <= 105
# -109 <= nums[i] <= 109