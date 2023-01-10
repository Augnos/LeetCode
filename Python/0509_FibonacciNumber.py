# The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

# That is,
# F(0) = 0, F(1) = 1
# F(n) = F(n - 1) + F(n - 2), for n > 1.

# Given n, calculate F(n).

class Solution(object):
    def fib(self, n):
        # declare an object to hold all fibonacci values, with 0 and 1 already defined
        fibList = {
            0: 0,
            1: 1
        }

    # for each value of n greater than 1, we calculate and add new values to the object
        for i in range(2, n+1):
            fibList[i] = fibList[i - 2] + fibList[i - 1]

        # return the object value at key of n
        return fibList[n]


test = Solution()
print(test.fib(0))
print(test.fib(1))
print(test.fib(5))
print(test.fib(20))
