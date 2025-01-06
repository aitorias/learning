const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

function add(number1: number, number2: number, showResult: boolean, phrase: string) {
	// console.log(typeof number1);
	// console.log(typeof number2);

	// if (typeof number1 !== 'number' || typeof number2 !== 'number') {
	// 	throw new Error('Incorrect input!');
	// }

	// if (typeof number1 === 'number' && typeof number2 === 'number') {
	// 	return number1 + number2;
	// }

	const result = number1 + number2;

	if (showResult) {
		console.log(phrase + result);
	} else {
		return result;
	}
}

add(number1, number2, printResult, resultPhrase);
