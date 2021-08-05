//bro
// var humanYearsCatYearsDogYears = function(humanYears) {

//     while (h > 2) {
//         c += 4;
//         d += 5;
//         h -= 1;
//     }
//     return [h, c, d]
// }  

//me + tbone
var humanYearsCatYearsDogYears = function(humanYears) {
    h = humanYears
    if (h == 1) {
        c = d = 15;
    } else if (h == 2) {
        c = d = 24;
    } else {
    c = 24 + ((h - 2) * 4);
    d = 24 + ((h - 2) * 5);
    }
    return [h, c, d]
}  

console.log(`expected [2, 24, 24] returned ${humanYearsCatYearsDogYears(2)}`)
console.log(`expected [5, 36, 39] returned ${humanYearsCatYearsDogYears(5)}`)
console.log(`expected [10, 56, 64] returned ${humanYearsCatYearsDogYears(10)}`)

// got cat&dog x humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that