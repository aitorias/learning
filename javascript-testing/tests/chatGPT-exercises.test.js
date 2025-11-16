import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { capitalizeWords, countOccurrences, debounceFunction, filterAdults, groupByAgeRange, isPalindrome, removeDuplicates, reverseString, sum } from "../src/chatGPT-exercises";

describe('ChatGPT exercises tests', () => {
  describe('sum function tests', () => {
    it('should throw an error if the first parameter is not a number', () => {
      expect(() => sum('1', 2)).toThrow()
    })

    it('should throw an error if the second parameter is not a number', () => {
      expect(() => sum(1, '2')).toThrow()
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
      expect(() => reverseString(1)).toThrow()
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
      expect(() => isPalindrome(1)).toThrow()
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
      expect(() => removeDuplicates(['a'])).not.toThrow()
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

  describe('debounceFunction tests', () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })

    afterEach(() => {
      vi.clearAllTimers()
      vi.useRealTimers()
    })

    it('should throw if first argument is not a function', () => {
      expect(() => debounceFunction(1, 100)).toThrow()
      expect(() => debounceFunction('fn', 100)).toThrow()
    })

    it('should throw if second argument is not a number', () => {
      expect(() => debounceFunction(() => { }, '100')).toThrow()
      expect(() => debounceFunction(() => { }, null)).toThrow()
    })

    it('should call the original function after the delay', () => {
      const fn = vi.fn()
      const debounced = debounceFunction(fn, 100)

      debounced()
      expect(fn).not.toHaveBeenCalled()

      vi.advanceTimersByTime(100)
      expect(fn).toHaveBeenCalledTimes(1)
    })

    it('should only call the original function once for rapid calls', () => {
      const fn = vi.fn()
      const debounced = debounceFunction(fn, 100)

      debounced()
      debounced()
      debounced()
      expect(fn).not.toHaveBeenCalled()

      vi.advanceTimersByTime(100)
      expect(fn).toHaveBeenCalledTimes(1)
    })

    it('should call the original function with latest arguments', () => {
      const fn = vi.fn()
      const debounced = debounceFunction(fn, 100)

      debounced(1)
      debounced(2)
      debounced(3)

      vi.advanceTimersByTime(100)
      expect(fn).toHaveBeenCalledWith(3)
    })

    it('should preserve `this` context', () => {
      const context = { x: 42 }
      function fn() { return this.x }
      const spy = vi.fn(fn)
      const debounced = debounceFunction(spy, 50)

      debounced.call(context)
      vi.advanceTimersByTime(50)
      expect(spy.mock.instances[0]).toBe(context)
    })
  })

  describe('filterAdults function tests', () => {
    it('should throw if argument is not an array or array is empty', () => {
      expect(() => filterAdults(1)).toThrow()
      expect(() => filterAdults('2')).toThrow()
      expect(() => filterAdults([])).toThrow()
      expect(() => filterAdults(['1'])).toThrow()
      expect(() => filterAdults([{}])).toThrow()
      expect(() => filterAdults([{ 'a': '2' }])).toThrow()
    })

    it('should throw if invalid elements (null / undefined)', () => {
      expect(() => filterAdults([null])).toThrow()
      expect(() => filterAdults([undefined])).toThrow()
    })

    it('should return an empty array if all elements under 18', () => {
      const kids = [
        { name: 'Kid1', age: 5 },
        { name: 'Kid2', age: 17 }
      ]

      expect(filterAdults(kids)).toStrictEqual([])
    })

    it('should return an array with valid and invalid mix', () => {
      const array = [{ name: 'Alice', age: 20 }, { foo: 'bar' }]

      expect(() => filterAdults(array)).toThrow()
    })

    it('should return an array with only valid adults', () => {
      const adultsOnly = [{ name: 'John', age: 30 }]

      expect(filterAdults(adultsOnly)).toStrictEqual(adultsOnly)
    })

    it('should return correct adults', () => {
      const adults = [
        {
          name: 'Aitor',
          age: 32
        },
        {
          name: 'Clara',
          age: 26
        },
        {
          name: 'Eidur',
          age: 7
        }
      ]

      const correctAdults = [
        {
          name: 'Aitor',
          age: 32
        },
        {
          name: 'Clara',
          age: 26
        }
      ]

      expect(filterAdults(adults)).toStrictEqual(correctAdults)
    })
  })

  describe('groupByAgeRange function tests', () => {
    it('should throw if input is not an array or contains invalid elements', () => {
      expect(() => groupByAgeRange(1)).toThrow()
      expect(() => groupByAgeRange('string')).toThrow()
      expect(() => groupByAgeRange([1, 2])).toThrow()
      expect(() => groupByAgeRange([null])).toThrow()
      expect(() => groupByAgeRange([undefined])).toThrow()
      expect(() => groupByAgeRange([{}])).toThrow()
      expect(() => groupByAgeRange([{ age: '20' }])).toThrow()
      expect(() => groupByAgeRange([{ name: 'Alice' }])).toThrow()
    })

    it('should return empty groups if array is empty', () => {
      expect(groupByAgeRange([])).toStrictEqual({ child: [], adult: [], senior: [] })
    })

    it('should correctly group people by age ranges', () => {
      const people = [
        { name: 'Alice', age: 10 },
        { name: 'Bob', age: 25 },
        { name: 'Clara', age: 70 },
        { name: 'David', age: 17 },
      ]

      const grouped = {
        child: [
          { name: 'Alice', age: 10 },
          { name: 'David', age: 17 },
        ],
        adult: [
          { name: 'Bob', age: 25 },
        ],
        senior: [
          { name: 'Clara', age: 70 },
        ],
      }

      expect(groupByAgeRange(people)).toStrictEqual(grouped)
    })

    it('should correctly classify boundary ages', () => {
      const people = [
        { name: 'ChildBoundary', age: 17 },
        { name: 'AdultBoundary1', age: 18 },
        { name: 'AdultBoundary2', age: 64 },
        { name: 'SeniorBoundary', age: 65 },
      ]

      const grouped = {
        child: [{ name: 'ChildBoundary', age: 17 }],
        adult: [
          { name: 'AdultBoundary1', age: 18 },
          { name: 'AdultBoundary2', age: 64 },
        ],
        senior: [{ name: 'SeniorBoundary', age: 65 }],
      }

      expect(groupByAgeRange(people)).toStrictEqual(grouped)
    })

    it('should handle arrays with only children, adults, or seniors', () => {
      const children = [{ name: 'Kid', age: 5 }]
      const adults = [{ name: 'Adult', age: 30 }]
      const seniors = [{ name: 'Senior', age: 80 }]

      expect(groupByAgeRange(children)).toStrictEqual({ child: children, adult: [], senior: [] })
      expect(groupByAgeRange(adults)).toStrictEqual({ child: [], adult: adults, senior: [] })
      expect(groupByAgeRange(seniors)).toStrictEqual({ child: [], adult: [], senior: seniors })
    })

    it('should preserve additional properties on person objects', () => {
      const people = [
        { name: 'Alice', age: 10, hobby: 'drawing' },
        { name: 'Bob', age: 25, hobby: 'coding' },
        { name: 'Clara', age: 70, hobby: 'reading' },
      ]

      const grouped = {
        child: [{ name: 'Alice', age: 10, hobby: 'drawing' }],
        adult: [{ name: 'Bob', age: 25, hobby: 'coding' }],
        senior: [{ name: 'Clara', age: 70, hobby: 'reading' }],
      }

      expect(groupByAgeRange(people)).toStrictEqual(grouped)
    })
  })
})
