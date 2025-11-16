import { describe, expect, it, test } from "vitest";
import { capitalizeWords, countOccurrences, isPalindrome, removeDuplicates, reverseString, sum } from "../src/chatGPT-exercises";

describe('ChatGPT exercises tests', () => {
  describe('sum function tests', () => {
    it('should throw an error if the first parameter is not a number', () => {
      expect(() => sum('1', 2)).toThrow(TypeError)
    })

    it('should throw an error if the second parameter is not a number', () => {
      expect(() => sum(1, '2')).toThrow(TypeError)
    })

    it('should return 3 as the result adding 1 plus 2', () => {
      expect(sum(1, 2)).toBe(3)
    })

    it('should return -2 as the result of adding -4 plus 2', () => {
      expect(sum(-4, 2)).toBe(-2)
    })

    it('should return 10.25 as the result of adding 8 plus 2.25', () => {
      expect(sum(8, 2.25)).toBeCloseTo(10.25)
    })

    it('should return 0 as the result of adding 0 plus 0', () => {
      expect(sum(0, 0)).toBe(0)
    })
  })

  describe('reverseString function tests', () => {
    it('should throw an error if the parameter is not a string', () => {
      expect(() => reverseString(1)).toThrow(TypeError)
    })

    it('should throw an error if the string contains less than 2 characters', () => {
      expect(() => reverseString('a')).toThrow()
    })

    it('should return "elloh" given "hello"', () => {
      expect(reverseString('hello')).toBe('olleh')
    })
  })

  describe('isPalindrome function tests', () => {
    it('should throw an error if the parameter is not a string', () => {
      expect(() => isPalindrome(1)).toThrow(TypeError)
    })

    it('should throw an error if the string contains less than 3 characters', () => {
      expect(() => isPalindrome('a')).toThrow()
    })

    it('should throw an error if the string contains less than 3 characters', () => {
      expect(() => isPalindrome('ab')).toThrow()
    })

    it('should return "false" given "hello"', () => {
      expect(isPalindrome('hello')).toBe(false)
    })

    it('should return "true" given "level"', () => {
      expect(isPalindrome('level')).toBe(true)
    })
  })

  describe('removeDuplicates function tests', () => {
    it('should throw if argument is a number', () => {
      expect(() => removeDuplicates(1)).toThrow()
    })

    it('should throw if argument is a string', () => {
      expect(() => removeDuplicates('r')).toThrow()
    })

    it('should not throw an Error if the argument is an array', () => {
      expect(() => removeDuplicates(['a'])).not.toThrowError(Error)
    })

    it('should return the array if the array is empty', () => {
      expect(removeDuplicates([])).toStrictEqual([])
    })

    it('should return the array if there are no duplicates in the array', () => {
      expect(removeDuplicates(['a', 'b'])).toStrictEqual(['a', 'b'])
    })

    it('should remove the second "b" and return "[\'a\', \'b\']"', () => {
      expect(removeDuplicates(['a', 'b', 'b'])).toStrictEqual(['a', 'b'])
    })

    it('should remove the second "b" and return "[\'a\', \'c\', \'b\']"', () => {
      expect(removeDuplicates(['a', 'c', 'b', 'b'])).toStrictEqual(['a', 'c', 'b'])
    })

    it('should remove all "b" excepts the first one and return "[\'b\', \'c\']"', () => {
      expect(removeDuplicates(['b', 'c', 'b', 'b'])).toStrictEqual(['b', 'c'])
    })

    it('should remove duplicate numbers', () => {
      expect(removeDuplicates([1, 2, 2, 3, 3, 3])).toStrictEqual([1, 2, 3])
    })

    it('should handle mixed data types', () => {
      expect(removeDuplicates(['a', 1, 'a', 1, true, false, true]))
        .toStrictEqual(['a', 1, true, false])
    })

    it('should not remove object duplicates unless they reference the same object', () => {
      const obj = { x: 1 }

      expect(removeDuplicates([obj, { x: 1 }, obj]))
        .toStrictEqual([obj, { x: 1 }])
    })

    it('should keep the original order', () => {
      expect(removeDuplicates(['b', 'a', 'b', 'c', 'a']))
        .toStrictEqual(['b', 'a', 'c'])
    })

    it('should handle large arrays efficiently', () => {
      const arr = Array(10000).fill('x')
      expect(removeDuplicates(arr)).toStrictEqual(['x'])
    })
  })

  describe('countOccurrences function tests', () => {
    it('should throw if argument is a number', () => {
      expect(() => countOccurrences(1)).toThrow()
    })

    it('should throw if argument is a string', () => {
      expect(() => countOccurrences('r')).toThrow()
    })

    it('should return 0 for an empty array', () => {
      expect(countOccurrences([], 'a')).toBe(0)
    })

    it('should count undefined correctly', () => {
      expect(countOccurrences([undefined, 1, undefined], undefined)).toBe(2)
    })

    it('should return 0 if value is not in the array', () => {
      expect(countOccurrences(['a', 'b'], 'c')).toBe(0)
    })

    it('should return 1 when value appears once', () => {
      expect(countOccurrences(['a', 'b'], 'a')).toBe(1)
    })

    it('should work with mixed types', () => {
      expect(countOccurrences([1, 'b'], 1)).toBe(1)
    })

    it('should return correct count for multiple matches', () => {
      expect(countOccurrences([1, 'b', 'd', 1, 1, 's'], 1)).toBe(3)
    })
  })

  describe('capitalizeWords function tests', () => {
    it('should throw if argument is not a string', () => {
      expect(() => capitalizeWords(1)).toThrow()
      expect(() => capitalizeWords(null)).toThrow()
    })

    it('should handle single character', () => {
      expect(capitalizeWords('a')).toBe('A')
    })

    it('should handle single word', () => {
      expect(capitalizeWords('hello')).toBe('Hello')
    })

    it('should handle multiple words', () => {
      expect(capitalizeWords('hello buddy')).toBe('Hello Buddy')
    })

    it('should handle multiple spaces', () => {
      expect(capitalizeWords('hello   buddy')).toBe('Hello Buddy')
    })

    it('should handle leading/trailing spaces', () => {
      expect(capitalizeWords('  hello buddy  ')).toBe('Hello Buddy')
    })

    it('should preserve rest of letters casing', () => {
      expect(capitalizeWords('hElLo bUdDy')).toBe('HElLo BUdDy')
    })
  })

})
