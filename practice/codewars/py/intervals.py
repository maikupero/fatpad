# -------------------------------------------------------------------------------
# --------------------------- Enlightening solutions ----------------------------
# -------------------------------------------------------------------------------


# -------------------------------------------------------------------------------
# -------------------------------- My solution ----------------------------------
# -------------------------------------------------------------------------------

def overlap(a, b):
    return a[0] <= b[1] and a[1] >= b[0]

def no_overlaps(intervals):
    # print(intervals)
    def delap():
        
        for a_index, a in enumerate(intervals):
            for b_index, b in enumerate(intervals[a_index+1:], a_index+1):
                if overlap(a, b):
                    a = (min(*a,*b), max(*a,*b))
                    intervals[a_index] = a
                    del intervals[b_index]
                    # print(intervals)
                    return True
        return False
    
    while delap():
        pass

def sum_of_intervals(intervals):
    no_overlaps(intervals)
    return sum(b-a for a, b in intervals)






def sum_of_intervals1(intervals):
    final = get_true_intervals(intervals)
    sum = 0
    for interv in final:
        sum += (max(interv) - min(interv))
    return sum

def check_unique(intervals):
    for i in range(len(intervals)):
        for j in range(i+1, len(intervals)):
            if intervals[i][1] >= intervals[j][0]:
                return 0
    return 1

def reduce_overlaps(intervals):
    less_overlaps = [[intervals[0][0],intervals[0][1]]]
    for i in range(1, len(intervals)):
        new = [intervals[i][0],intervals[i][1]]
        added = 0
        for interv in less_overlaps:
            if new[0] >= min(interv) and new[1] <= max(interv):
                break
            elif new[0] < max(interv) and new[1] > max(interv):
                interv.append(new[1])
                added = 1
            elif new[0] < min(interv) and new[1] > min(interv):
                interv.append(new[0])
                added = 1
            elif added == 0 and ((new[1] < min(interv)) or (new[0] > min(interv))):
                less_overlaps.append(new)
                break
    return [[min(i),max(i)] for i in less_overlaps]

def get_true_intervals(intervals):
    while len(intervals) > 1 and check_unique(intervals) == 0:
        intervals = reduce_overlaps(intervals)
    return intervals

test1 = [(1, 5)]
expect1 = 4
test2 = [(1, 5), (6, 10)]
expect2 = 8
test3 = [(1, 5), (2, 4), (3, 8), (7, 9), (10, 12)]
expect3 = 10
test4 = [(1, 4), (7, 10), (3, 5)]
expect4 = 7
test5 = [(-267, -98), (-422, -218), (230, 247), (-301, 364), (-472, -145), (201, 239), (222, 338), (234, 430), (219, 470), (-104, 393)]
expect5 = 942
print(f"Tested: {sum_of_intervals(test1)}\nExpect: {expect1}")
print(f"Tested: {sum_of_intervals(test2)}\nExpect: {expect2}")
print(f"Tested: {sum_of_intervals(test3)}\nExpect: {expect3}")
print(f"Tested: {sum_of_intervals(test4)}\nExpect: {expect4}")
print(f"Tested: {sum_of_intervals(test5)}\nExpect: {expect5}")


# https://www.codewars.com/kata/52b7ed099cdc285c300001cd