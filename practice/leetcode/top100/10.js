// Best solution:


// My solution:
// Learned a lot about 
// But the fastest way would be to do it in one pass, I see now. setting buy = sell.
var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let max_profit = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let current = prices[right] - prices[left];
            if (current > max_profit) {
                max_profit = current;
            }
        } else {
            left = right;
        }
        right++;
    }

    return max_profit
}

// Faster way would be to find min, find max of subarray from min to end, pop min, repeat.
var maxProfit2 = function(prices) {
    let current = 0
    let buy = 0;
    let sell = 0;

    while (prices.length > 1) {
        // console.log(prices);
        buy = prices.indexOf(Math.min(...prices));
        sell = Math.max(...prices.slice(buy));
        // console.log(buy,sell)
        if (sell - prices[buy] > current) {
            current = sell - prices[buy];
        }
        prices.splice(buy,1);
    }

    return current
};

// Slow way (I expect time limit to be exceeded).
var maxProfitSlow = function(prices) {
    let current = 0
    for (let buy = prices.length-2; buy > -1; buy--) {
        for (let sell = buy+1; sell < prices.length; sell++) {
            if (prices[sell] - prices[buy] > current) {
                current = prices[sell] - prices[buy]
            }
        }
    }

    return current
};


// Examples

test1 = [7,1,5,3,6,4]
expect1 = 5
// Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

test2 = [7,6,4,3,1]
expect2 = 0
// In this case, no transactions are done and the max profit = 0.

test3 = [3,9,7,1,5,2,6,10]
expect3 = 9
console.log(`Example 1: ${test1} yields: ${maxProfit(test1)}, expected: ${expect1}`);
console.log(`Example 2: ${test2} yields: ${maxProfit(test2)}, expected: ${expect2}`);
console.log(`Example 3: ${test3} yields: ${maxProfit(test3)}, expected: ${expect3}`);



// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and 
// choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. 
// If you cannot achieve any profit, return 0.
// Constraints:
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104