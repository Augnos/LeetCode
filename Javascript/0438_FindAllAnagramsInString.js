// Given two strings s and p, return an array of all the start indices of p's anagrams in s. 
// You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let list = {};
    let output = [];

    // mapping characters in p to list
    for (let char of p) {
        if (Object.keys(list).includes(char)) list[char] = -1;
        else list[char]--;
    };

    let start = 0;
    let end = 0;
    while (end < s.length) {
        if (Object.keys(list).includes(s.charAt(end))) {
            list[s[end]]++;
        }

        if (end < p.length - 1) {
            end++;
            continue;
        }

        if (isAnagram(list)) {
            output.push(start)
        }

        if (Object.keys(list).includes(s.charAt(start))) {
            list[s[start]]--;
        }

        start++;
        end++;
    }

    return output;
};

// if list values are all 0, then slice is an anagram of p
var isAnagram = function (obj) {
    for (let key in obj) {
        if (obj[key] != 0) return false;
    }
    return true;
}

console.log(findAnagrams("cbaebabacd", "abc"))
console.log(findAnagrams("abab", "ab"))