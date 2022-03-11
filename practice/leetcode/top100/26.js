// Summary
var threeSum = function(nums) {
    sums = [];
    if (nums.length < 3) return sums;

    nums.sort((a, b) => a - b);

    for (let l = 0; l < nums.length-2; l++) {
        // Skips for efficiency
        if (nums[l] > 0) return sums;
        if (l > 0 && nums[l] === nums[l-1]) continue

        for (let m = l + 1, r = nums.length - 1; m < r;) {
            if (nums[l] + nums[m] + nums[r] === 0) {
                sums.push([nums[l], nums[m], nums[r]]);
                m++;
                r--;

                // More skips for efficiency
                while (m < r && nums[m] == nums[m-1]) {
                    m++;
                }
                while (r > m && nums[r] == nums[r+1]) {
                    r--;
                }
            } else if (nums[l] + nums[m] + nums[r] > 0) {
                r--;
            } else {
                m++;
            }
        }
    }

    return sums
};

test1 = [-1,0,1,2,-1,-4]
expected1 = [[-1,-1,2],[-1,0,1]]
test2 = []
expected2 = []
test3 = [0]
expected3 = []
test4 = [1,1,1]
expected4 = []

console.log(`${test1} yields ${threeSum(test1)}, expected ${expected1}`);
console.log(`${test2} yields ${threeSum(test2)}, expected ${expected2}`);
console.log(`${test3} yields ${threeSum(test3)}, expected ${expected3}`);
console.log(`${test4} yields ${threeSum(test4)}, expected ${expected4}`);
// console.log(`${test5} yields ${threeSum(test5)}, expected ${expected5}`);
// console.log(`${test6} yields ${threeSum(test6)}, expected ${expected6}`);

// 15. 3Sum
// https://leetcode.com/problems/3sum/
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Constraints:
// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105