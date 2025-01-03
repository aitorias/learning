const button = document.querySelector("button");
const input1 = document.getElementById("number1");
const input2 = document.getElementById("number2");

function add(number1, number2) {
	if (typeof number1 === "number" || typeof number2 === "number") {
		return number1 + number2;
	} else {
		return +number1 + +number2;
	}
}

button.addEventListener("click", function () {
	console.log(add(input1.value, input2.value));
});
