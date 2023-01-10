# You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
# Once you pay the cost, you can either climb one or two steps.

# You can either start from the step with index 0, or the step with index 1.

# Return the minimum cost to reach the top of the floor.

class Solution:
    def minCostClimbingStairs(self, cost=[]):
        # push one index to be our "top", set to 0
        cost.append(0)

        # rewriting the cost array, where each step will be the sum of itself and the min of the next 2 steps
        for i in range(len(cost)-3, -1, -1):
            cost[i] += min(cost[i+1], cost[i+2])

        # minimum cost will be the smaller of starting index 0 or 1
        return min(cost[0], cost[1])


test1 = Solution()

print(test1.minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
