# Quiz 1

## Question 1

Why are "Types" useful and offer an advantage compare to vanilla JavaScript?

1. Types allows you to use brand-new language features that run in the browser.
2. Types allows you to detect errors early and avoid some runtime errors.
3. Types don't offer any significant advantages but simply offer a different way of writing code.

### Solution: 2

## Question 2

Will the following code throw a compilation error?

```js
let userName: string;
userName = "Maximilian";
userName = false;
```

1. Yes
2. No, because a string is assigned first.
3. No, because "string" is a default JavaScript type.

### Solution: 1

## Question 3

Does this code rely on type inference?

```js
const age: number = 29;
```

1. Yes, definitely!
2. Not really - a type is assigned explicitly as well.

### Solution: 2

## Question 4

What's the difference between JavaScript types (e.g. `typeof 'Max' => 'string'`) and TypeScript types (e.g. `const name: string = '...'`)?

1. There is no difference.
2. JavaScript doesn't know any types.
3. TS types are checked during compilation, JS types during runtime.

### Solution: 3
