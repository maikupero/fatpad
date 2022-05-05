// # https://www.hackerrank.com/challenges/find-the-running-median

// # The median of a set of integers is the midpoint value of the data set for which 
// # an equal number of integers are less than and greater than the value. 

// # 1.  Sort in non-decreasing order, then:
// # 2.  If odd number of elements, the median is the middle element of the sorted sample.
// #     If even number of elements, the median is the average of the two middle elements of the sorted sample.

// # Given an input stream of  integers, perform the following task for each integer:
// # • Add the  integer to a running list of integers.
// # • Find the median of the updated list (i.e., for the first element through the  element).
// # • Print the updated median on a new line. The printed value must be a double-precision number scaled to  decimal place (i.e.,  format).

// # Example
// # Sorted          Median
// # [7]             7.0
// # [3, 7]          5.0
// # [3, 5, 7]       5.0
// # [2, 3, 5, 7]    4.0

// # Each of the median values is stored in an array and the array is returned for the main function to print.
// # Note: Add formatting to the print statement.


// # runningMedian has the following parameters:
// # - int a[n]: an array of integers
// # Returns
// # - float[n]: the median of the array after each insertion, modify the print statement in main to get proper formatting.

// # Input Format
// # The first line contains a single integer, the number of integers in the data stream.
// # Each line  of the  subsequent lines contains an integer, , to be inserted into the list.

// # Constraints

// # Sample Input

// # STDIN   Function
// # -----   --------
// # 6       a[] size n = 6
// # 12      a = [12, 4, 5, 3, 8, 7]
// # 4
// # 5
// # 3
// # 8
// # 7
// # Sample Output

// # 12.0
// # 8.0
// # 5.0
// # 4.5
// # 5.0
// # 6.0


// import heapq

// def addNum(num, lowers, highers):
//     if not lowers or num < -lowers[0]:
//         heapq.heappush(lowers,-num)
//     else:
//         heapq.heappush(highers,num)
    
// def rebalance(lowers, highers):
//     if len(lowers) - len(highers) >= 2:
//         heapq.heappush(highers,-heapq.heappop(lowers))
//     elif len(highers) - len(lowers) >= 2:
//         heapq.heappush(lowers,-heapq.heappop(highers))

// def getMedian(lowers, highers):
//     if len(lowers) == len(highers):
//         return (-lowers[0] + highers[0])/2
//     if len(lowers) > len(highers):
//         return float(-lowers[0])
//     else:
//         return float(highers[0])


// def runningMedian(a):
//     lowers = []  # max heap, vals should go in and come out negated
//     highers = []  # min heap, vals should go in positive
//     result = []
//     for v in a:
//         addNum(v, lowers, highers)
//         rebalance(lowers, highers)
//         result.append(round(getMedian(lowers, highers),1))
//     return result



// Below is fine but the proper way is to use two heaps, as above.


function runningMedian(a) {
    const res = [];
    const nums = [];

    function sortedInsert(num) {
        if (!nums.length) {
            nums.push(num);
        } else {
            let i = 0;
            while (nums[i] < num) {
                i++;
            }
            nums.splice(i, 0, num);
        }
    }

    for (let num of a) {

        sortedInsert(num);
        let l = nums.length;

        let med = nums.length === 1 ? nums[0] : nums[Math.floor(l/2)];
        let count = 1;
        if (l % 2 === 0) {
            med += (nums[l/2]-1);
            count *= 2;
        } 

        med = parseFloat(med/count).toFixed(1);

        res.push(med);
        console.log(`list = ${nums}, median = ${med}`)
    }

    return res
}


console.log(runningMedian([1,2,3,4]))
