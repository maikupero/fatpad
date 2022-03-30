# https://leetcode.com/problems/subsets/discuss/27301/Python-easy-to-understand-solutions-(DFS-recursively-Bit-Manipulation-Iteratively).

# Alternatively, beautyful python:
    # def subsets(self, nums):
    #     result = [[]]
    #     for num in nums:
    #         result += [i + [num] for i in result]
    #     return result


# I gotta be honest, this is still black magic to me.
# Depth first search this list. 
# with [1,2,3] we'll append an empty list.
# then for each 1, 2, 3, do the same search. So ([2,3], [1], [[]])

# append [1] to ans
# for 2, 3, do the same search. So ([3], [1, 2], [[],[1]])
# append [1,2] to ans
# for 3 do the same search. So ([], [1,2,3], [[],[1],[1,2]])
# append [1,2,3] to ans
# nums is empty so it ends there and goes two steps back.
# append [1,3] to ans
# nuns empty again so it ends. goes back to original for loop.
# append [2] to ans
# for 3 do the same search. So ([3], [2,3], [[],[1],[1,2],[1,2,3],[1,3],[2]])
# append [2,3] to ans
# nuns empty again, ends. back to original for loop.
# append [3].
# nuns empty, for loop done, return.

class Solution:
    
    def subsets(self, nums: list) -> list[list]:
        ans = []
        self.dfs(nums, [], ans)       
        return ans

    def dfs(self, nums, path, ans):
            ans.append(path)
            for i in range(len(nums)):
                self.dfs(nums[i+1:], path+[nums[i]], ans)
        
        
                


        
test1 = [1,2,3]
expected1 = [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

test2 = [0]
expected2 = [[],[0]]
print(f"Testing {test1} returns {Solution.subsets(test1)} expected {expected1}")
print(f"Testing {test2} returns {Solution.subsets(test2)} expected {expected2}")

# 78. Subsets
# https://leetcode.com/problems/subsets/
# Given an integer array nums of unique elements, return all possible subsets (the power set).
# The solution set must not contain duplicate subsets. Return the solution in any order. 
# Constraints:
# 1 <= nums.length <= 10
# -10 <= nums[i] <= 10
# All the numbers of nums are unique.