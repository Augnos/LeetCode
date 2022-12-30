// Given an array nums. 
// We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

var runningSum = function(nums) {
    let sum = 0;
    let output = [];
    nums.forEach(n => {
        sum += n;
        output.push(sum);
    });
    return output;
};