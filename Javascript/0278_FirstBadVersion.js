// You are a product manager and currently leading a team to develop a new product. 
// Unfortunately, the latest version of your product fails the quality check. 
// Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. 
// Implement a function to find the first bad version. 
// You should minimize the number of calls to the API.

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        // search range variables
        let start = 0;    // starts at 0, only moves when good version found
        let end = n + 1;  // starts at n+1, only moves when bad version found

        while (start + 1 != end) {
            // mid is set to halfway point between start and end
            let mid = Math.ceil((start + end) / 2);

            // if version bad, set end to mid
            if (isBadVersion(mid)) end = mid;

            // if version is not bad
            else start = mid;
        }

        // when start and end are adjacent, end is first bad version
        return end;
    };
};