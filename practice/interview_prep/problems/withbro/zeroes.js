

function zeroes(nums) {
    if (nums.length < 2) {
        return nums
    }

    let l = 0;
    let r = 1;

    while (r < nums.length-1) {
        
        while (nums[l] !== 0 && l < nums.length-1) {
            l++;
        }

        r = l;
        while (nums[r] === 0 && r < nums.length-1) {
            r++;
        }

        [nums[l], nums[r]] = [nums[r], nums[l]];
    }

    console.log(nums)
}

console.log(`Testing: [1,0,3,0,0,4] expecting: [1,3,4,0,0,0] becomes: ${zeroes([1,0,3,0,0,4])}`)

console.log(`Testing: [0,0,0,4,5,0,0,9,11,0] expecting: [4,5,9,11,0,0,0,0,0,0] becomes: ${zeroes([0,0,0,4,5,0,0,9,11,0])}`)

console.log(`Testing: [1,2,3,4,5,6] expecting: [1,2,3,4,5,6] becomes: ${zeroes([1,2,3,4,5,6])}`)
