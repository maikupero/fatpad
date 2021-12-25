# -------------------------------------------------------------------------------
# --------------------------- Enlightening solutions ----------------------------
# -------------------------------------------------------------------------------

# Oh.
def longest_consec(strarr, k):
    result = ""
    
    if k > 0 and len(strarr) >= k:
        for index in range(len(strarr) - k + 1):
            s = ''.join(strarr[index:index+k])
            if len(s) > len(result):
                result = s
            
    return result
    
# Detailed.
def longest_consec(strarr, k):
    # Make sure that k is greater than zero and less that the
    # length of the array of strings. Otherwise return an empty string
    if k <= 0 or k > len(strarr):
        return ''

    # Finding the longest string consisting of k consecutive
    # strings is equivalent to finding the maximum sum of
    # k consecutive elements of an array that represents the
    # lengths of an array of strings.

    # star_lengths represents a list of lengths of the initial
    # array of strings.
    starr_lengths = list(map(len, strarr))
    # Find the maximum sum of k consecutive elements
    # requires keeping a temperary maximum length.
    temp_max_len = 0
    # We also need to keep the position of the first element of
    # each group.
    position = 0

    # Scan the whole list of lengths except the final k elements
    for p in range(len(starr_lengths) - (k - 1)):
        # We need to find the sum of the current set of elements
        # starting at position p
        set_sum = 0
        for i in range(k):
            set_sum += starr_lengths[p+i]
        
        if set_sum > temp_max_len:
            temp_max_len = set_sum
            position = p

    return ''.join([s for s in strarr[position:position+k]])
# -------------------------------------------------------------------------------
# -------------------------------- My solution ----------------------------------
# -------------------------------------------------------------------------------


def longest_consec(strarr, k):
    # Exception Cases
    if not strarr or k > len(strarr):
        return ""
    else:
        scores = []
        for word in range(len(strarr)-(k-1)):
            score = 0
            for i in range(k):
                score += len(strarr[word+i])
            scores.append(score)
        print(scores)
        start = scores.index(max(scores))
        print(start)
        final = str()
        for i in range(k):
            final += strarr[i+start]

    return final

# Accidentally made longest possible concatenated string finder
def longest_possible(strarr, k):
    # Exception Cases
    if not strarr or k > len(strarr):
        return ""
    else:
        final = str()
        print(strarr)
        for i in range(k):
            longest = max(strarr, key=len)
            strarr.pop(strarr.index(longest))
            final += longest
            print(strarr)

    return final

test = (["zone", "abigail", "theta", "form", "libe", "zas"], 2)
expect = "abigailtheta"
print(f"Tested: {longest_consec(test[0],test[1])}\nExpect: {expect}")

# https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/python