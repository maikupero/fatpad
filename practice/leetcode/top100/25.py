# Summary:
# Thinking about it, the first thing I notice is that for each number in the list, there is a max container.
# So find that for each, and choose the max. 

# However, there is a more efficient way to do it than what I set up below.
# Use two pointers. Increment towards the lower of left and right towards the center
class Solution:
    # Best Solution
    def maxArea(height):
        l = 0
        r = len(height)-1
        container = 0

        while l != r:
            x = r - l
            y = min(height[l], height[r])
            container = max(x*y, container)

            if y == height[l]:
                l += 1
            else:
                r -= 1  

        return container
                

    # My solution
    def maxArea2(height):
        sizes = []
        for lx, left in enumerate(height[:-1]):
            possibleAreas = set((min(left, right) * (rx - lx)) for rx, right in enumerate(height[lx+1:], lx+1))
            sizes.append(max(possibleAreas))
        return max(sizes)

# Example cases:

test1 = [1,8,6,2,5,4,8,3,7]
expected1 = 49
# Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
# In this case, the max area of water (blue section) the container can contain is 49.
test2 = [1,1]
expected2 = 1

print(Solution.maxArea(test1))
print(Solution.maxArea(test2))
 
# 11. Container With Most Water
# https://leetcode.com/problems/container-with-most-water/

# You are given an integer array height of length n. 
# There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
# Find two lines that together with the x-axis form a container, such that the container contains the most water.
# Return the maximum amount of water a container can store.
# Notice that you may not slant the container.

# Constraints:
# n == height.length
# 2 <= n <= 105
# 0 <= height[i] <= 104