import { describe, expect, it, test } from "vitest";
import { calculateFactorial, fizzBuzz, max } from "../src/intro";

describe('Max tests', () => {
  it('should return the first argument if it is greater', () => {
    expect(max(2, 1)).toBe(2)
  })

  it('should return the second argument if it is greater', () => {
    expect(max(1, 2)).toBe(2)
  })

  it('should return the first argument if arguments are equal', () => {
    expect(max(1, 1)).toBe(1)
  })
})

describe('FizzBuzz tests', () => {
  it('should return "FizzBuzz" if number is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  })

  it('should return "Fizz" if number is only divisible by 3', () => {
    expect(fizzBuzz(6)).toBe('Fizz')
  })

  it('should return "Buzz" if number is only divisible by 5', () => {
    expect(fizzBuzz(10)).toBe('Buzz')
  })

  it('should return the number as string if number is not divisible by 3 and 5', () => {
    expect(fizzBuzz(4)).toBe('4')
  })
})

describe('Factorial tests', () => {
  it('should return "undefined" if the number is lower than 0', () => {
    expect(calculateFactorial(-1)).toBe(undefined)
  })

  it('should return "1" if the number is 0', () => {
    expect(calculateFactorial(0)).toBe(1)
  })

  it('should return "1" if the number is 1', () => {
    expect(calculateFactorial(1)).toBe(1)
  })

  it('should return "2" if the number is 2', () => {
    expect(calculateFactorial(2)).toBe(2)
  })

  it('should return "6" if the number is 3', () => {
    expect(calculateFactorial(2)).toBe(2)
  })

  it('should return "24" if the number is 4', () => {
    expect(calculateFactorial(4)).toBe(24)
  })

  it('should return "120" if the number is 5', () => {
    expect(calculateFactorial(5)).toBe(120)
  })
})
