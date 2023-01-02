// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. 
// No two characters may map to the same character, but a character may map to itself.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    // returns false if string lengths don't match
    if (s.length != t.length) return false;

    // declare new object to map strings
    let map = {};

    for (i = 0; i < s.length; i++) {
        // If character in s isn't mapped, but t is, return false
        if (map[s.charAt(i)] == undefined && Object.values(map).includes(t.charAt(i))) return false;

        // If character in s isn't mapped, map the s:t pair, then iterate
        if (map[s.charAt(i)] == undefined) {
            map[s.charAt(i)] = t.charAt(i);
            continue;
        }

        // If character key:value doesn't match for s:t, return false
        if (map[s.charAt(i)] != t.charAt(i)) return false;
    }

    // return true if loop completes
    return true;
};

console.log(isIsomorphic("egg", "add"))
console.log(isIsomorphic("foo", "bar"))
console.log(isIsomorphic("badc", "baba"))
console.log(isIsomorphic("paper", "title"))