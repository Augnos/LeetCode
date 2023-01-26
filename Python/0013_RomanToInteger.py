class Solution(object):
    def romanToInt(self, s):
        dict = {
            "M": 1000,
            "D": 500,
            "C": 100,
            "L": 50,
            "X": 10,
            "V": 5,
            "I": 1
        }
        output = 0

        s = s.replace("IV", "IIII")
        s = s.replace("IX", "VIIII")
        s = s.replace("XL", "XXXX")
        s = s.replace("XC", "LXXXX")
        s = s.replace("CD", "CCCC")
        s = s.replace("CM", "DCCCC")

        for char in s:
            output += dict[char]

        return output


test = Solution()

print(test.romanToInt("III"))
print(test.romanToInt("LVIII"))
print(test.romanToInt("MCMXCIV"))
