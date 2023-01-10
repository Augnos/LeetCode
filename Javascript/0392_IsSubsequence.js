// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {

    if (s == "") return true;

    // checks sequence. i follows s, and j follows t
    for (let i = 0, j = 0; j < t.length; j++) {
        // increments i only when checked characters match
        if (s[i] == t[j]) {
            i++;
            // returns true when sequence in s have been verified complete
            if (i == s.length) return true;
        }
    }
    return false;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
