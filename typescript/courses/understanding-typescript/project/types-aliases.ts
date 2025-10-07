type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
	input1: Combinable,
	input2: Combinable,
	resultConversion: ConversionDescriptor
) {
	let result: Combinable;

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
