// Union type example
function combine(input1: number | string, input2: number | string) {
	let result: number | string;

	if (typeof input1 === 'string' || typeof input2 === 'string') {
		result = input1.toString() + input2.toString();
	} else {
		result = input1 + input2;
	}

	return result;
}

const combinedAges = combine(31, 25);

console.log(combinedAges);

const combinedNames = combine('Aitor', 'Clara');

console.log(combinedNames);
