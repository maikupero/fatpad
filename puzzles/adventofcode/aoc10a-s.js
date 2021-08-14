import input from '../data/aoc10data.js';  

var adapters = input => {
    let devices = input
    .replace(/\n/g,' ')                 //replace all line breaks with spaces
    .split(/\s/)                        //make array split by spaces (line break spots)
    .sort(function(a, b){return a-b})   //ascending order
    .map(x => parseInt(x));             //turn into integers
    
    devices.splice(0, 0, 0);                        //add charging outlet (starting value)
    devices.push(devices[devices.length - 1] + 3); //add your device (ending value)
    console.log(devices);


    let total = [0];
    let ones = 0;
    let threes = 0;

    for (let i = 1; i < devices.length; i++) {
        if ((devices[i] - devices[i - 1]) === 1) {
            ones += 1;
        } else if ((devices[i] - devices[i - 1]) === 3) {
            threes += 1;
        }
        total.push(devices[i]);
        console.log(total,'total ||',ones,'ones ||',threes,'threes');
    }

    return ones * threes
}
console.log(adapters(input));
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
// Any given adapter can take an input 1, 2, or 3 jolts lower than its rating 
// Your device has a built-in joltage adapter rated for 3 jolts higher than the highest.
// The charging outlet near your seat has a rating of 0.
// If you use every adapter in your bag at once, what is the distribution of 
// joltage differences between the charging outlet, the adapters, and your device?


// For example
// 16
// 10
// 15
// 5
// 1
// 11
// 7
// 19
// 6
// 12
// 4
// With these adapters, your device's built-in joltage adapter would be rated for 19 + 3 = 22 jolts, 3 higher than the highest-rated adapter.

// Because adapters can only connect to a source 1-3 jolts lower than its rating, in order to use every adapter, you'd need to choose them like this:

// The charging outlet has an effective rating of 0 jolts, so the only adapters that could connect to it directly would need to have a joltage rating of 1, 2, or 3 jolts. Of these, only one you have is an adapter rated 1 jolt (difference of 1).
// From your 1-jolt rated adapter, the only choice is your 4-jolt rated adapter (difference of 3).
// From the 4-jolt rated adapter, the adapters rated 5, 6, or 7 are valid choices. However, in order to not skip any adapters, you have to pick the adapter rated 5 jolts (difference of 1).
// Similarly, the next choices would need to be the adapter rated 6 and then the adapter rated 7 (with difference of 1 and 1).
// The only adapter that works with the 7-jolt rated adapter is the one rated 10 jolts (difference of 3).
// From 10, the choices are 11 or 12; choose 11 (difference of 1) and then 12 (difference of 1).
// After 12, only valid adapter has a rating of 15 (difference of 3), then 16 (difference of 1), then 19 (difference of 3).
// Finally, your device's built-in adapter is always 3 higher than the highest adapter, so its rating is 22 jolts (always a difference of 3).
// In this example, when using every adapter, there are 7 differences of 1 jolt and 5 differences of 3 jolts.

// Here is a larger example:

// 28
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
// 3
// In this larger example, in a chain that uses all of the adapters, there are 22 differences of 1 jolt and 10 differences of 3 jolts.

// Find a chain that uses all of your adapters to connect the charging outlet to your device's built-in adapter and count the joltage differences between the charging outlet, the adapters, and your device. What is the number of 1-jolt differences multiplied by the number of 3-jolt differences?

// To begin, get your puzzle input.

// Answer: 
 

// You can also [Share] this puzzle.