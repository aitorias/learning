## Types

### Core types

TypeScript type system **only helps before the code gets compiled** to JavaScript.

All **TypeScript core types are all lowercase**.

#### Number

All numbers (1, 1.1, -1, ...). There are no differences between integers or floats numbers.

#### String

All text values, also **"template literals"**

#### Boolean

**Just true or false**, not "truthy" (like the "1" number) or "falsy" (like the "0") values

## Inference

TypeScript compiler can **automatically assign a type to a constant or a variable** based on the value assigned to it.

I.E:

```js
const x = 1;
// TypeScript will infer type 'number' because it is a constant, and its value cannot change, so its type neither.
// x: 1
```

```js
let x = 1;
// Because is a variable and not a constant and its value can change, TypeScript will add the type 'number' automatically.
// x: number;
```

```js
let x = [0, 1, null];
// TypeScript will infer x: (number | null)[]
```

If a constant or variable **has a value**, is **not a good practise to declare the type**, because it is redundant. For example:

```js
const x = 5; // OK
const x: number = 5; // Unnecessary
```

But when declaring a constant or a variable without a value, it is necessary to tell TypeScript compiler which type will have this constant or variable. For example:

```js
const x: number; // Must
```

When a variable is declared and a value is assigned (even without expressing directly its type), the type of the variable will be the type of the first value assigned, and it never changes. For example:

```js
let x = 1;
x = "String"; // This will give an error, because TypeScript compiler detected that  x: number
```
