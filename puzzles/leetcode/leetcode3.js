
// while i misunderstood 
// var climbStairs = function(n) {
//     let x = 0;
//     for (let t = (n - 1); t > Math.floor(n / 2); t -= 1) {
//         x += t;         
//     }
//     if (Math.floor(n / 2) == n / 2) {   //even
//         return x + 2
//     } else return x + 1     //odd
// }

var climbStairs = function(n) {
    let x = [1,1];
    for (let y = 2; y <= n; y++) {
        x.push(x[y - 2]+x[y - 1]);
    }
    return x[n];
}
// 0 1 1 2 3 5 8 13 21 34 55 89 144 233
                            
console.log(climbStairs(3)) 
console.log(climbStairs(4)) 
console.log(climbStairs(5)) 
console.log(climbStairs(6)) 
console.log(climbStairs(19)) 
console.log(climbStairs(35))
console.log(climbStairs(40))
console.log(climbStairs(41))
console.log(climbStairs(42))
console.log(climbStairs(43))
console.log(climbStairs(44))
console.log(climbStairs(45))
console.log(climbStairs(100))

/// when using 2s, up to half of n rounded down. 
                       
// for using 1 2 --  n - 1
// for using 2 2s -- n - 3.  n - 2..    n   n + 2. 
// for using 3 2s --                    1   4

//1s and 2s
// 4     4: 1 1 1 1   
// 5      3: 1 1 2      1 2 1   2 1 1   
//       2: 22

// 5     1 5: 11111
// 8     4 4: 1112 1121 1211 2111
//      3 3: 122 221 212
//      0 2: 

// 6   1 6: 111111          using only 1s,
// 13  5 5s: 11112    11121   11211   12111   21111    
//     4 4s:  1221  1122  2211 2112   <-- this was wrong. 2 more ways. (1212 2121)        
//      1 3:  222       using only 2s

// 7    7: 1111111
        // 6: 111112 111121 111211 112111 12111 211111
        // 5: 11122 11212 12112 21112 11221 12121 21121 12211 22111
        // 4: 
        // 3: 2221 2212 2122 1222

