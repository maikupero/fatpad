class Solution:
    # Easy to understand solution
    def rotate2(matrix) -> None:
        l = 0
        r = len(matrix) -1
        while l < r:
            matrix[l], matrix[r] = matrix[r], matrix[l]
            l += 1
            r -= 1
        for i in range(len(matrix)):
            for j in range(i):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

    # Best solution
    def rotate(matrix) -> None:
        rotated = []
        
        for col in range(len(matrix)):
            temp = []
            for row in range(len(matrix)-1,-1,-1):
                temp.append(matrix[row][col])
            rotated.append(temp)

        for row in range(len(matrix)):
            for col in range(len(matrix)):
                matrix[row][col] = rotated[row][col]
                
        
# 1 2 3     7 4 1
# 4 5 6 --> 8 5 2
# 7 8 9     9 6 3
# 
# 5  1  9  11     15 13 2  5
# 2  4  8  10 --> 14 3  4  1
# 13 3  6  7      12 6  8  9
# 15 14 12 16     16 7  10 11

test1 = [[1,2,3],[4,5,6],[7,8,9]]
expected1 = [[7,4,1],[8,5,2],[9,6,3]]
test2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
expected2 = [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

print(f"Testing {test1} yields {Solution.rotate(test1)} expected {expected1}")
print(f"Testing {test2} yields {Solution.rotate(test2)} expected {expected2}")

# 48. Rotate Image
# https://leetcode.com/problems/rotate-image/
# You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
# You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
# DO NOT allocate another 2D matrix and do the rotation. 

# Constraints:
# n == matrix.length == matrix[i].length
# 1 <= n <= 20
# -1000 <= matrix[i][j] <= 1000