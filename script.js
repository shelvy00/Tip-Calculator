 function calculateTip() {
 	const billAmount = document.getElementById("bill-amount").value;
 	const tipPercentage = document.getElementById("tip-percentage").value;
 	const tipAmount = document.getElementById("tip-amount").value = billAmount * (tipPercentage / 100);
 	document.getElementById("total-bill").value = parseFloat(billAmount) + parseFloat(tipAmount);
 	console.log(billAmount)
 }