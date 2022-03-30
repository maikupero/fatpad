class Solution:
    # Binary search y value, binary search x value.
    def searchMatrix(matrix: list, target: int) -> bool:
        def searchY(row):
            for y in range(1,len(row)):
                if row[y] > target:
                    return y-1
            return len(row)-1

        # Realized I can just do this simple version.
        y = searchY([row[0] for row in matrix])
        return target in matrix[y]


        # def searchY(row):
        #     for y in range(1,len(row)):
        #         if row[y] > target:
        #             return y-1
        #     return len(row)-1
            
        # def searchX(col):
        #     for x in matrix[col]:
        #         if target == x:
        #             return x
        #     return False

        # y = searchY([row[0] for row in matrix])
        # x = searchX(y)
        # return False if not x else True
        

            
            
# 10 11 16 20
# 1  3  5  7 
# 23 30 34 60
test1a = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
test1b = 3
expected1 = True
test2a = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
test2b = 13
expected2 = False
test3a = [[-10,-8,-6,-4,-3],[0,2,3,4,5],[8,9,10,10,12]]
test3b = 0
expected3 = True

print(f"Testing {test1a,test1b} returns {Solution.searchMatrix(test1a,test1b)} expected {expected1}")
print(f"Testing {test2a,test2b} returns {Solution.searchMatrix(test2a,test2b)} expected {expected2}")
print(f"Testing {test3a,test3b} returns {Solution.searchMatrix(test3a,test3b)} expected {expected3}")

# 74. Search a 2D Matrix
# https://leetcode.com/problems/search-a-2d-matrix/

# Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. 
# This matrix has the following properties:
# Integers in each row are sorted from left to right.
# The first integer of each row is greater than the last integer of the previous row.
# Constraints:
# m == matrix.length
# n == matrix[i].length
# 1 <= m, n <= 100
# -104 <= matrix[i][j], target <= 104