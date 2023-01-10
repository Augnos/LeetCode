// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. 
// Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    // push one index to be our "top", set to 0
    cost.push(0);

    // rewriting the cost array, where each step will be the sum of itself and the min of the next 2 steps
    for (i = cost.length-3; i >= 0; i--){
        cost[i] = cost[i] + Math.min(cost[i+1], cost[i+2])
    };

    // minimum cost will be the smaller of starting index 0 or 1
    return Math.min(cost[0], cost[1]);
};

console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))