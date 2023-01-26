/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const dict = {
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1
    };
    let output = 0;

    for (i=0; i < s.length; i++){
        if (dict[s[i+1]] && dict[s[i+1]] > dict[s[i]]){
            output -= dict[s[i]]
        } else output += dict[s[i]]
    }

    return output;
};

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))