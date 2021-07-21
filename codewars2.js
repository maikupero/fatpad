// so if n is 5 ye     n x 2 
//and address is 7
// return 4 is the goal

// 1 10
// 3 8
// 5 6
// 7 4
// 9 2
//house number address    length of street n

//i's counting up by 2 from 1
//j's counting down by 2 from n*2
//while address = i[] return j[]

var overTheRoad = function(address, n) {
    let x = 0;
    if(address % 2 == 0) {
        for (let j = n * 2; j > 0; j-2) {
            if (address == j) {      
                return i + (x ?  
                } 
            else {
                x = x + 1;
            } 
        }
    }
    else {
        for (let i = 1; i < n * 2; i+2) {       
            if (address == i[x]) {
                return j[x];
                }
            else {
                x = x + 1;
            }
            
        }
    }
}
    
console.assert(overTheRoad(7, 5) == 4, `expected 4, instead returned ${overTheRoad(7,5)}`)
    // const odds = function(n) {
    //     for (let i = 1; i < n * 2 - 1; i+2) {
            
    //     }
    // }
    // const evens = function(n) {
    //     for (let i = n * 2; i > 0; i-2) {

    //     }
    // }




// var twoSum = function(nums, target) {

//     for (let i = 0; i < nums.length - 1; i++) {
//         var difference = target - nums[i];
//         for (let j = i + 1; j < nums.length; j++) {
//             var check = (nums[j] == difference);
//             if (check == true) {
//                 return [i, j];
//             }
//         }
//     }
// }; 