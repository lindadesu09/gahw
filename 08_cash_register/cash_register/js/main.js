var totalAmount = 0;

document.getElementById("entry").onsubmit = formIsSubmitted;

function formIsSubmitted(e) {
	e.preventDefault();
	var userInput = parseFloat(document.getElementById("newEntry").value);
	totalAmount = totalAmount + userInput;
	document.getElementById("total").innerHTML = totalAmount;
	// console.log('userInput');
} 





