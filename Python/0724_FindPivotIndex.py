class Solution(object):
    def pivotIndex(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        left = 0
        right = sum(nums)

        for i in range(0, len(nums)):
            right -= nums[i]
            if left == right: 
                return i
            left += nums[i]
        
        right -= nums[len(nums)-1]
        if left == right: 
            return len(nums)-1
        else: 
            return -1
        