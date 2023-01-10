// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let list = {};
    let odd = false;
    let output = 0;

    // each character is counted and added to list
    for (i = 0; i < s.length; i++) {
        if (list[s[i]]) list[s[i]]++;
        else list[s[i]] = 1;
    }

    for (let char in list) {
        // add char count to output
        output += list[char];

        // round down to even number if odd
        if (list[char] % 2 == 1) {
            odd = true;
            output--;
        }
    }

    // if any char counts were odd, add 1 to output to set palindrome center
    if (odd) output++

    return output;
};

console.log(longestPalindrome("abccccdd"))
console.log(longestPalindrome("a"))