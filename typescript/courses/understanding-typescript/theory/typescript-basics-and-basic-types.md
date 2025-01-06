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
    name: "Max",
    age: 24,
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

When accessing to each element of the Array, TypeScript will know that each element of the Array will be of the type assigned to that Array. For example, If we have an Array of strings, TypeScript will know that each value will be a string, and it lets to access all methods of the 'string' type.

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

A tuple is a type that is used to represent a fixed length Array that contains multiple types and where the order in which they are indexed is important. It is important to declare the type as a tuple. For example:

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