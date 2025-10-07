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

## Object types

Any JavaScript object, more specific types (type of object) are possible.

Objects will type as `(key): (type)`, separated with a colon.

I.E:

```js
{
    age: 31;
}
```

When instantiating any variable with an object,** the types of its properties will be infered** by TypeScript compiler. For example:

```js
const person = {
	name: 'John';
	age: 25
}

// TypeScript will infer the types of the properties' values
/*
Object type:

const person: {
	name: string;
	age: number;
}
*/
```

It is also possible, but not a good practise, to infer the types after the name of the constant or varaible with **specialized object type**. For example:

```js
const person: {
    name: string,
    age: number,
} = {
    name: "Aitor",
    age: 31,
};
```

And when assigning value to properties, they will be the same type as the declaration before.

### Nested object and types

Object types can also be created for **nested objects**. For example:

```js
const product = {
    id: "abc1",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    details: {
        title: "Red carpet",
        description: "A great carpet - almost brand new",
    },
};
```

Its type will be:

```js
const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
```

## Arrays types

Format: `type[]`. Example: (`number[], string[]`)

Arrays can store any type (number, string, booleans, objects, other arrays) and mixed data.

Array type can be flexible or strict, regarding the element types.

For example:

```js
let favoriteActivities: string[];

favoriteActivities = "Sports";

// Because favoriteActivities infered the type array of strings, it cannot be any else type, so that line of code will throw an error.

favoriteActivities = ["Sports"];

// Now the variable is an Array that contain a string, so it will match the type of the variable. And it also can store multiple strings inside of it like: ['sports', 'gaming', ...].

// But the Array cannot contain anything but a string, so if we try to add a number or boolean, for example, it will throw an error:

favoriteActivities = ["Sports", 1]; // Will throw an error
```

When accessing to each element of the Array, TypeScript will know that each element of the Array will be of the **type assigned to that Array**. For example, If we have an Array of strings, TypeScript will know that each value will be a string, and it lets to access all methods of the 'string' type.

```js
// When accessing the array of string, TypeScript will infer that each element of that Array will be an string. So TypeScript will know that each value will be a string, and it lets to access all methods of the 'string' type.
for (const hobby of person.hobbies) {
    console.log(hobby);
}

// TypeScript will detect const hobby: string; So its possible to do, for example:
// hobby.toUppercase()
// hobby.indexOf()
// ...
```

## Tuples

Format: `[type, type]`. Example: (`[number, number]`)

A tuple is a type that is used to represent a **fixed length Array** that contains **multiple types** and where the order in which **they are indexed** is important. It is important to declare the type as a tuple. For example:

```js
const failingResponse = ["Not found", 404];

// it is necessary to declare its type as a tuple

const passingResponse: [string, number] = ["{}", 200];
```

TypeScript does not know that role can only contains two values, so it is possible to change the values and mutate the properties. TypeScript only knows that role should be of type string or number array.

If we want exactly that structure, two elements where the first one is a number and the second one is a string, we need to explicit the type of role. We need to override

```js
const person = {
    name: "Aitor",
    age: 30,
    hobbies: ["Sports", "Gaming"],
    role: [1, "admin"],
};

person.role.push("admin");
// we can change the value of the second property because TypeScript does not know its property.
person.role[1] = 2;

// Specifiying the type of role is needed to be more precise:

const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string],
} = {};

// Now, this will give an error, because TypeScript knows that role is a tuple with types [number, string], and we are trying to change "admin", that is a 'string', as wee typed in the tuple, for a '2', that is a number.
person.role[1] = 2; // Will display an error

// It cannot be possible to mutate the role type, for example, adding another property to it:

person.role = [0, "admin", "user"]; // Will display an error
```

## Enums

Enums allow developers to define a **set of named constants**. Using enums can make it easier to document intent, or **create a set of distinct cases**. TypeScript provides both **numeric and string-based enums**.

Example:

```js
enum Role {
	ADMIN,
	USER
}

const person = {
    name: "Aitor",
    age: 30,
    hobbies: ["Sports", "Gaming"],
    role: Role.ADMIN
};
```

### Numeric enums

We can also add a **custom value to a keyword**. Each next keyword **will add one to the default value**. So for example:

```js
enum Direction {
  Up = 2,
  Down,
  Left,
  Right,
}

// Down = 3
// Left = 4
// Right = 5
```

But also, it is possible to assign a **custom value to each keyword**. For example:

```js
enum Direction {
  Up = 2,
  Down = 45,
  Left = 23,
  Right = 2,
}
```

### String enums

String enums are a similar concept, but have some subtle **runtime differences**. In a string enum, **each member has to be constant-initialized with a string literal**, or with another string enum member. For example:

```js
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

### Heterogeneous enums

Technically enums can be mixed with string and numeric members, but it’s not clear why you would ever want to do so:

```js
enum BooleanLikeHeterogeneousEnum {
	No = 0,
	Yes = "YES",
}

```

## Any

The most flexible type. Is a special type that it can be used whenever we want a **particular value to cause typechecking errors**.

When a value is of type any, **it can access any properties of it** (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:

## Union types

A union type is a **type formed from two or more other types**, representing values that may be any one of those types. We refer to **each of these types as the union's members**. For example:

```js
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}
```

The separator of the union members is allowed before the first element

```
function printTextOrNumberOrBool(
  textOrNumberOrBool:
    | string
    | number
    | boolean
) {
  console.log(textOrNumberOrBool);
}
```

## Literal Types

Literal types can hold specific values on it. The best example, as we did before, is when assigning a value to a constant. The constant will infer as type its own value. For example:

```js
const constantString = "Hello World";
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
// const constantString: "Hello World"
```

The same for numbers:

```js
const number = 2;
// const number: 2
```

It is also possible to define multiple literal types, for example, in function's arguments:

```js
function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: "as-number" | "as-text"
) {
    // ...
}
```

## Type aliases / Custom types

It is also possible to define custom types with the `type` keyword, where is possible to encode more complex definitions. For example:

```javascript
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor)
```

Even it is possible to create aliases for object types. For example:

```javascript
type User = {
	name: string;
	age: number;
}

const USER1: User = {
	name: "Aitor",
	age: 31
} // OK

const USER2: User = {
	name: Aitor,
	age: "31"
} // Error
```

## Function return types & "void"

We can add types for the return of a function. For example

```javascript
function add(number1: number, number2: number): number {
	return n1 + n2;
} // OK

function add(number1: number, number2: number): string {
	return n1 + n2;
} // Error
```

If there is no specific reason for explicity the return type, is it better to let TypeScript infer the return type of a function. Example:

```javascript
function add(number1: number, number2: number) {
	return n1 + n2;
} // OK
```

If a function does not return anything (like a function that prints a `console.log()`), the function will have `void` as a return type. Example:

```javascript
function printResult(number: number) {
	console.log('Result: ' + number);
}

// Is like
function printResult(number: number): void {
	console.log('Result: ' + number)
}
```

## Functions as types

Function can also be a type:

```javascript
function add(number1: number, number2: number) {
	return number1 + number2;
}

let variable: Function;

variable = add; // OK

variable = 23; // Error

console.log(variable(1, 2));
```

And we can make more complex type assignment, like this example:

```javascript
let variable: () => number; // This variable accepts any function that has no parameters and return a number.

function test1(number1: number) {
	return number1 + 2;
} // ERROR

function test2() {
	return 2 * 2;
} // OK

function test3() {
	return "3";
} // ERROR
```

## Function types & Callbacks

We can also pass a callback function as an argument of a function that accepts specified types:

```javascript
function addAndHandle(number1: number, number2: number, callback: (number: number) => void) {
	const result = number1 + number2;
	callback(result);
}

addAndHandle(2, 4, (result) => {
	console.log(result); // prints 8
});
```
