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

/**
 * Implement:
 * Write a function debounceFunction(theFunction, delay) that returns a debounced version of function.
 */
export function debounceFunction(theFunction, delay) {
  if (typeof theFunction !== "function") throw new Error('First argument must be a function')
  if (typeof delay !== "number") throw new Error('Second argument must be a number')

  let timeoutID

  return function (...args) {
    clearTimeout(timeoutID)

    timeoutID = setTimeout(() => {
      theFunction.apply(this, args)
    }, delay)
  }
}

/**
 * Implement:
 * Write a function called filterAdults that takes an array of people objects and returns a new array containing only the people who are 18 or older.
 */
export function filterAdults(arrayOfAdults) {
  if (!Array.isArray(arrayOfAdults)) throw new TypeError('The argument must be an array')
  if (arrayOfAdults.length === 0) throw new Error('Array is empty')

  const elementsValidation = arrayOfAdults.every((element) => typeof element === "object" && element !== null && 'age' in element && typeof element?.age === "number")

  if (!elementsValidation) throw new Error('Each element must be a person object with an age property')

  return arrayOfAdults.filter((adult) => adult.age >= 18)
}

/**
 * Implement:
 * Write a function called groupByAgeRange that takes an array of people objects (like before, each with a name and age) and returns an object that groups people by these age ranges:
 * "child" → 0–17
 * "adult" → 18–64
 * "senior" → 65+
 */
export function groupByAgeRange(arrayOfPeople) {
  if (!Array.isArray(arrayOfPeople)) throw new TypeError('The argument must be an array')
  if (arrayOfPeople.length === 0) return { child: [], adult: [], senior: [] }

  const elementsValidation = arrayOfPeople.every((element) => typeof element === "object" && element !== null && 'age' in element && typeof element?.age === "number")

  if (!elementsValidation) throw new Error('Each element must be a person object with an age property')

  function getAgeGroup(age) {
    if (age <= 17) return 'child';
    else if (age <= 64) return 'adult';
    else return 'senior';

  }

  return arrayOfPeople.reduce((groupPeople, currentPerson) => {
    const personGroup = getAgeGroup(currentPerson.age)

    groupPeople[personGroup].push(currentPerson)

    return groupPeople
  }, { child: [], adult: [], senior: [] })
}
