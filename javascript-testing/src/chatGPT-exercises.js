/**
 * Implement:
 * Write a function sum(a, b) that returns the sum of two numbers.
 */
export function sum(a, b) {
  if (typeof (a) !== "number" || Number.isNaN(a)) throw new TypeError('The first parameter is not a number')
  if (typeof (b) !== "number" || Number.isNaN(b)) throw new TypeError('The second parameter is not a number')

  const result = a + b

  if (Number.isInteger(result) && (result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER)) { throw new RangeError('Number out of safe integer range'); }

  return result
}

/**
 * Implement:
 * Write a function reverseString(string) that returns the string reversed
 */
export function reverseString(string) {
  if (typeof (string) !== "string") throw new TypeError('It must be a string')

  if (string.length <= 1) throw new Error('String must have more than 1 character')

  return [...string].reverse().join('');
}

/**
 * Implement:
 * Write a function isPalindrome(string) that returns "true" if the string is a palindrome
 */
export function isPalindrome(string) {
  if (typeof (string) !== "string") throw new TypeError('It must be a string')

  if (string.length <= 2) throw new Error('String must have more than 2 characters')

  const normalizedString = string.toLowerCase()
  const stringLength = normalizedString.length

  for (let i = 0; i < stringLength / 2; i++) {
    if (normalizedString[i] !== normalizedString[stringLength - 1 - i]) return false
  }

  return true
}

/**
 * Implement:
 * Write a function removeDuplicates(array) that removes duplicates from array
 */
export function removeDuplicates(array) {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')
  return [...new Set(array)]
}

/**
 * Implement:
 * Write a function countOccurrences(array, values) that returns how many times a value appears in array.
 */
export function countOccurrences(array, value) {
  if (!Array.isArray(array)) throw new Error('Argument must be an array')

  return array.reduce((count, element) => {
    return element === value ? count + 1 : count
  }, 0)
}

/**
 * Implement:
 * Write a function capitalizeWords(string) that capitalizes the first letter of every word.
 */
export function capitalizeWords(string) {
  if (typeof string !== "string") throw new Error('Argument must be a string')

  const words = string.split(' ').filter((word) => word)

  return words.map((word) => {
    const [first, ...rest] = word;

    return first.toUpperCase() + rest.join('');
  }).join(' ')
}

