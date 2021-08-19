def dbl_linear(n, array = [1]):
    for num in range(n):
        if array.count(2*array[num]+1) == 0: array.append(2*array[num]+1)
        if array.count(3*array[num]+1) == 0: array.append(3*array[num]+1)
    print (array)
    print sorted(array)
    return sorted(array)[n]

print(dbl_linear(20))

# 1 -> 3 4
# 9 -> 19 28
# 10 -> 21 31 
# 13 -> 27 40

# if 57 [20] / 2 - 1 is in array 
# 56 / 2          56 / 3
# 28
# 27 / 2   27 / 3
#             9
# 8 / 2   8 / 3
# 4 
# 3 / 2   3 / 3
#             1 

# 64 [23]
# 63 / 2  63 / 3
#             21
# 20 / 2  20 / 3
# 10
# 9 / 2   9 / 3
#             3


# 87 [29]
# 86 / 2  86 / 3
# 43
# 42 / 2  42 / 3
# 21
# 20 / 2  20 / 3
# 10 
# 9 / 2   9 / 3
#             3

# 91 [30]
# 90 / 2  90 / 3
# 45      30
# 44 / 2  44 / 3          29 / 2      29 / 3
# 22
# 21 / 2  21 / 3
#         7   
# 6 / 2   6 / 3
# 3       2

# sorting is what costs



# if 28 [12] / 2 - 1 is in array 
# 13 [6]
# else 9 [4]