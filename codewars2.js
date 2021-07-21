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
// var twoSum = function(nums, target) {
//     const hash = {};
//     for(let i = 0; i < nums.length; i++){
//       const difference = target - nums[i];
//       if(difference in hash){
//         return [i, hash[difference]];
//       }else{
//         hash[nums[i]] = i;
//       }
//     }
//     return [];
//   };
<<<<<<< HEAD
// // another attempt
// var attempt = function(address, n) {
//     let i = [];
//     let j = [];
//     let p = 0;
//     if (address % 2 == 0) {
//         for (let j = n * 2; j > 0; j - 2) {
//             for (let i = 1; i < n * 2; i + 2) {
//                 var check = (j[p] == address);
//                 if (check == true) {
//                     return i[p];
//                 }
//                 else {
//                     p = p + 1;
//                 }
//             }
//         }
//     }
// }
// console.log(attempt(8, 5))
=======

var attempt = function(address, n) {
    let i = [];
    let j = [];
    let p = 0;
    if (address % 2 == 0) {
        for (let j = n * 2; j > 0; j - 2) {         // 10, 8, 6, 4, 2
            for (let i = 1; i < n * 2; i + 2) {     // 1, 3, 5, 7, 9
                // 10 -> 6 = 2
                // 10 -> 2 = 4
                // (10-2) / 2
                // steps = (2*n - address) / 2
                var check = (j[p] == address);
                if (check == true) {
                    return i[p];
                }
                else {
                    p = p + 1;
                }
            }
        }
    }
}
console.log(attempt(8, 5))
>>>>>>> 5ed9c54d24f662b86634d5358b12a13d70bb4af2
// var overTheRoad = function(address, n) { 
//     let p = 0; //position
//     if(address % 2 == 0) { //for evens
//         for (let j = n * 2; j > 0; j - 2) { 
//             for (let i = 1; i < n * 2; i + 2) {
//                 var check = (j[p] == address);
//                 if (check == true) {   
//                     return i[p];
//                 }
//                 else {
//                     p = p + 1;
//                 }
//             }
//         } 
//     }
//     else { //for odds
//         for (let i = 1; i < n * 2; i+2) {       
//             if (address == i[x]) {
//                 return j[x];
//                 }
//             else {
//                 x = x + 1;
//             }
            
//         }
//     }
// }
// console.assert(overTheRoad(10, 5) == 1, `expected 1, instead returned ${overTheRoad(10,5)}`)
// console.log(overTheRoad(10,5))
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
//------------------------------------------------------
//------------------------------------------------------
//best solution
function genius(address, n) {
    return (2 * n + 1) - address
}
console.log(genius(8,5))
console.log(genius(37, 50))

//eric's math solution
10, 8, 6, 4, 2
1, 3, 5, 7, 9
function overTheRoad(address, n) {

    let p = 0;

    if (address % 2 == 0) {
       p = (2 * n - address) / 2;
       return 1 + (2 * p);
    } else {
       p = (address - 1) / 2;
       return (2 * n) - (2 * p);
    }
}
console.log(overTheRoad(8, 5))
//------------------------------------------------------
//------------------------------------------------------

//Michael's working slow solution
function overMyRoad(address, n) {
     let evens = [];
     let odds = [];
     let p = 0;
     
     for (let i = n * 2; i > 0; i -= 2) {  //10, 8, 6, 4, 2
        evens.push(i);
     }
     for (let i = 1; i < n * 2; i += 2) {   //1, 3, 5, 7, 9
        odds.push(i);
     }

     if (address % 2 == 0) {
         p = evens.indexOf(address);
         return odds[p];
     } else {
        p = odds.indexOf(address);
        return evens[p];
     }
 }

 console.log(overMyRoad(8, 5))

 console.log(overMyRoad(41, 50))