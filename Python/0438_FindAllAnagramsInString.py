# Given two strings s and p, return an array of all the start indices of p's anagrams in s.
# You may return the answer in any order.

# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

class Solution(object):
    def isAnagram(self, dict):
        for key in dict:
            if dict[key] != 0:
                return False
        return True

    def findAnagrams(self, s, p):
        list = {}
        output = []

        # mapping characters in p to list
        for char in p:
            if char in list:
                list[char] -= 1
            else:
                list[char] = -1

        start = 0
        end = 0
        while end < len(s):
            if s[end] in list:
                list[s[end]] += 1

            if end < len(p)-1:
                end += 1
                continue

            if self.isAnagram(list):
                output.append(start)

            if s[start] in list:
                list[s[start]] -= 1

            start += 1
            end += 1
            
        return output


test = Solution()

print(test.findAnagrams("cbaebabacd", "abc"))
print(test.findAnagrams("abab", "ab"))
