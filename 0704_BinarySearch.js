// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // search range variables
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        // sets mid as the middle index of array, rounded up if array length is even
        let mid = Math.floor((start + end) / 2);

        // when target found in nums at nums[mid], return mid
        if (target === nums[mid]) {
            return mid;
        }

        // sets new end when target is less than nums[mid]
        else if (target < nums[mid]) {
            end = mid - 1;
        }

        // sets new start when target is greater than nums[mid]
        else {
            start = mid + 1;
        }
    }
    return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9))
console.log(search([-1, 0, 3, 5, 9, 12], 22))