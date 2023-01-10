# You are climbing a staircase. It takes n steps to reach the top.

# Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

class Solution(object):
    def climbStairs(self, n):

        # climbing variation count is a fibonacci sequence
        # declare an object to hold all variations, with 1 and 2 already defined
        variations = {
            1: 1,
            2: 2
        }

        # for each value of n greater than 2, we calculate and add new values to the object

        for i in range(3, n+1):
            variations[i] = variations[i-2] + variations[i-1]

        # return the object value at key of n
        return variations[n]

test = Solution()

print(test.climbStairs(1))
print(test.climbStairs(3))
print(test.climbStairs(5))
print(test.climbStairs(10))
print(test.climbStairs(50))
