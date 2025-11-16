export function max(a, b) {
  return (a > b) ? a : b
}

export function fizzBuzz(number) {
  return `${number % 3 ? '' : 'Fizz'}${number % 5 ? '' : 'Buzz'}` || number.toString();
}

export function calculateFactorial(number) {
  if (number < 0) return undefined

  let result = 1

  for (let i = 1; i <= number; i++) {
    result *= i
  }

  return result
}
