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

var attempt = function(address, n) {
    let evens = [];
    let odds = [];
    let steps = 0;
    let answer = 0;

    for (let house = n * 2; house > 0; house -= 2) {
        evens.push(house);
    }

    for (let house = 1; house < 2*n; house += 2) {
        odds.push(house);
    }

    if (address % 2 == 0) {
        steps = evens.indexOf(address);
        answer = odds[steps];
    } else {
        steps = odds.indexOf(address);
        answer = evens[steps];
    }

    return answer
}
            /*
            var check = (evens[p] == address);
            if (check == true) {
                return i[p];
            }
            else {
                p = p + 1;
            } */
console.log('first test:', attempt(8, 5) == 3)
console.log('first test:', attempt(51, 100))

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