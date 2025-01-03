const button = document.querySelector("button")!;
const input1 = document.getElementById("number1")! as HTMLInputElement;
const input2 = document.getElementById("number2")! as HTMLInputElement;

function add(number1: number, number2: number) {
	return number1 + number2;
}

if (button) {
	button.addEventListener("click", function () {
		console.log(add(+input1.value, +input2.value));
	});
}
