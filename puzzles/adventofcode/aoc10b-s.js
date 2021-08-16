import input from '../data/aoc10data.js';  

var adapters = input => {
    let devices = input
    .replace(/\n/g,' ')                 //replace all line breaks with spaces
    .split(/\s/)                        //make array split by spaces (line break spots)
    .sort(function(a, b){return a-b})   //ascending order
    .map(x => parseInt(x));             //turn into integers
    
    devices.splice(0, 0, 0);                        //add charging outlet (starting value)
    devices.push(devices[devices.length - 1] + 3); //add your device (ending value)
    // console.log(devices);

    // So I have two ways of tackling this. One create a function that will map out every single
    // massive path from 0 -> end, changing one path fork each time. 
    // Or I can find a way to calculate it if I have an adapter at every single value. 
    // then find a way to calculate it if I am missing some of the adapters in each section of 3.
    // i.e. If i have 1 2 3, from 0 I have three paths to take. If i have 4 5 6, I have three paths 
    // each from 1, 2, and 3. If I have only 8 however, I have only two paths from 4, 5, and one from 6.
    // From 8, I have only 10 & 11, meaning I have two paths to take. 
    // From 10, I have one option, 11. From 11, I have 1 option, 14. From 14, I have 2, 15, 1, and 16 done. 
    //  1,2,3,4,5,6,8,10,11,14,15,16
    // 1 4 5 6 7 10 11 12 15 16 19  
    
    // 0 3 6 8.   
    // 0 1  3 6 8.    0 3.  
    // 0 1 2 3 6 8.   0 1 3. 0 2 3. 0 3.
    // 0 1 2 3 4 6 8. 0 1 2 3 4. 0 1 3 4. 0 2 3 4.  0 1 4. 0 2 4. 0 3 4. 0 4. 
                //    0 1 2 3 6. 0 1 3 6. 0 2 3 6. 0 3 6. 
    // 0 1 2 4 6 8.   0 1 4 6 8. 0 2 4 6 8. 
    


    //scratch that. pointer goes from the end of the array back. adds 1 permutation.
    // checks index -2, if > 3. skips adding 1. 
    // if i - i-2 === 3, add 1 permutation. 
    // if i - i-2 === 2, add 2.
    // i - i-2 cannot be 1. 
    // add in a clause for the end (the beginning of the array):
    // if pointer = 1.. - oh actually, I can just make that the end point
    // since there are no new permutations from 1-0 (always the same jump).
//     let permutations = 1;
//     for (let i = devices.length-1; i > 0; i--) {
//         console.log(devices[i],devices[i-2]);
//         if (devices[i] - devices[i-2] === 3) {
//             permutations += 1;
//         } else if (devices[i] - devices[i-2] === 2) {
//             permutations += 2;
//         }
//     }
//     return permutations
// }
    let permutations = 1;
    for (let index = 0; index < devices.length-2; index++) {
        console.log(devices[index],devices[index+2],permutations);
        if (devices[index+3] - devices[index] === 3) {
            permutations *= 3;
            continue
        } else if (devices[index+2] - devices[index] === 2) {
            permutations *= 2;
        }
    }
return permutations
}
// console.log(adapters(input));
// console.log(adapters(
// `16
// 10
// 15
// 5
// 1
// 11
// 7
// 19
// 6
// 12
// 4`))

// console.log(adapters(
// `28
// 33
// 18
// 42
// 31
// 14
// 46
// 20
// 48
// 47
// 24
// 23
// 49
// 45
// 19
// 38
// 39
// 11
// 1
// 32
// 25
// 35
// 8
// 17
// 7
// 9
// 4
// 2
// 34
// 10
// 3`))

// --- Part Two ---
// how many different ways can they be arranged? 
// Every arrangement needs to connect the charging outlet to your device. 
// Adapters can only connect to a source 1-3 jolts lower than its rating

// The first example above (the one that starts with 16, 10, 15) supports the following arrangements:

// (0), 1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19, (22)
// (0), 1, 4, 5, 6, 7, 10, 12, 15, 16, 19, (22)
// (0), 1, 4, 5, 7, 10, 11, 12, 15, 16, 19, (22)
// (0), 1, 4, 5, 7, 10, 12, 15, 16, 19, (22)
// (0), 1, 4, 6, 7, 10, 11, 12, 15, 16, 19, (22)
// (0), 1, 4, 6, 7, 10, 12, 15, 16, 19, (22)
// (0), 1, 4, 7, 10, 11, 12, 15, 16, 19, (22)
// (0), 1, 4, 7, 10, 12, 15, 16, 19, (22)


// (0), 1, 2, 3, 4, 7, 8, 9, 10, 11, 14, 17, 18, 19, 20, 23, 24, 25, 28, 31,
// 32, 33, 34, 35, 38, 39, 42, 45, 46, 47, 48, 49, (52)

// (0), 1, 2, 3, 4, 7, 8, 9, 10, 11, 14, 17, 18, 19, 20, 23, 24, 25, 28, 31,
// 32, 33, 34, 35, 38, 39, 42, 45, 46, 47, 49, (52)

// (0), 1, 2, 3, 4, 7, 8, 9, 10, 11, 14, 17, 18, 19, 20, 23, 24, 25, 28, 31,
// 32, 33, 34, 35, 38, 39, 42, 45, 46, 48, 49, (52)

// (0), 1, 2, 3, 4, 7, 8, 9, 10, 11, 14, 17, 18, 19, 20, 23, 24, 25, 28, 31,
// 32, 33, 34, 35, 38, 39, 42, 45, 46, 49, (52)

// (0), 1, 2, 3, 4, 7, 8, 9, 10, 11, 14, 17, 18, 19, 20, 23, 24, 25, 28, 31,
// 32, 33, 34, 35, 38, 39, 42, 45, 47, 48, 49, (52)

// (0), 3, 4, 7, 10, 11, 14, 17, 20, 23, 25, 28, 31, 34, 35, 38, 39, 42, 45,
// 46, 48, 49, (52)

// (0), 3, 4, 7, 10, 11, 14, 17, 20, 23, 25, 28, 31, 34, 35, 38, 39, 42, 45,
// 46, 49, (52)

// (0), 3, 4, 7, 10, 11, 14, 17, 20, 23, 25, 28, 31, 34, 35, 38, 39, 42, 45,
// 47, 48, 49, (52)

// (0), 3, 4, 7, 10, 11, 14, 17, 20, 23, 25, 28, 31, 34, 35, 38, 39, 42, 45,
// 47, 49, (52)

// (0), 3, 4, 7, 10, 11, 14, 17, 20, 23, 25, 28, 31, 34, 35, 38, 39, 42, 45,
// 48, 49, (52)

// What is the total number of distinct ways you can arrange the adapters 
// to connect the charging outlet to your device?
