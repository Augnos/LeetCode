// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
// Return the leftmost pivot index. If no such index exists, return -1.

var pivotIndexOld = function (nums) {
    // declaring initial indices for left and right side of pivot
    let leftIdx = 0;
    let rightIdx = nums.length - 1;

    // declaring running sums for each side of pivot
    let leftSum = 0, rightSum = 0;
    let pivot = -1;

    // while the pivot is an undefined range between left and right indices
    // also skips loop for nums with less than 3 values
    while (rightIdx - leftIdx > 2) {

        // will increment the lesser side and move index inward
        if (leftSum < rightSum) {
            leftSum += nums[leftIdx];
            leftIdx++;
        } else {
            rightSum += nums[rightIdx];
            rightIdx--;
        }
    }

    // adds last indices to their respective sums
    leftSum += nums[leftIdx];
    rightSum += nums[rightIdx];

    // sets pivot if both sums are equal and left/right indices are only 2 away 
    if (rightIdx - 2 === leftIdx && leftSum === rightSum) pivot = rightIdx - 1;
    return pivot;
};

var pivotIndex = function (nums) {
    let leftSum = 0;
    let rightSum = 0;

    nums.forEach(n => {
        rightSum += n;
    });

    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i];
        if (leftSum == rightSum) return i;
        leftSum += nums[i];
    }

    return -1;
}