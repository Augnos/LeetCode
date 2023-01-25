class Solution(object):
    def runningSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        sum = 0
        output = []
        for n in nums:
            sum += n
            output.append(sum)
        return output

test = Solution()
print(test.runningSum([1,1,1,1,1]))
print(test.runningSum([1,2,3,4,5]))