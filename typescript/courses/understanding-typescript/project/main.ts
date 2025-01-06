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


// Literal type example
function combine2(
	input1: number | string,
	input2: number | string,
	resultConversion: 'as-number' | 'as-text'
) {
	let result: number | string;

	if (
		(typeof input1 === 'string' && typeof input2 === 'string') ||
		resultConversion === 'as-text'
	) {
		result = input1.toString() + input2.toString();
	} else {
		result = +input1 + +input2;
	}

	return result;
}

const combinedAges2 = combine2(31, 25, 'as-number');

console.log(combinedAges2);

const combinedStringAges = combine2('31', '25', 'as-number');

console.log(combinedStringAges);

const combinedNames2 = combine2('Aitor', 'Clara', 'as-text');

console.log(combinedNames2);
