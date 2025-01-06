// Specialized Object Types
/*
const person: {
	name: string;
	age: number;
} = {
	name: 'Aitor',
	age: 31
};
*/
const person = {
	name: 'Aitor',
	age: 31,
	hobbies: [
		'Sports',
		'Gaming'
	],
	role: [
		1,
		'admin'
	]
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

/*
The type of the object is inferred by TypeScript, so we don't need to specify it:
(property) hobbies: string[]

for property 'role' as a tuple:
(property) role: (string | number)[]
*/

console.log(person);
console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby);
}

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}

// Enum example

enum Role {
	ADMIN,
	USER,
}

const person2 = {
	name: 'Aitor',
	age: 31,
	hobbies: [
		'Sports',
		'Gaming',
	],
	role: Role.ADMIN
};
