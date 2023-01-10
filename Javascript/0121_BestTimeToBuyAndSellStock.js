// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let low = prices[0];
    let high = prices[0];

    for (i = 0; i < prices.length; i++) {
        // low and high are reset when a new low is detected
        if (prices[i] < low) {
            low = prices[i]
            high = prices[i]
        }

        // when new high is reached, profit potential is compared to maxProfit
        if (prices[i] > high) {
            high = prices[i]

            // maxProfit updates when new profit is higher
            if (maxProfit < high - low) maxProfit = high - low;
        }
    }

    return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
console.log(maxProfit([2, 3, 1, 2]))