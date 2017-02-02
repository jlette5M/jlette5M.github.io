function displayMonth() {
	var thisMonth = (MONTH[monthPosition()].monthName);
	document.getElementById("month").innerHTML = thisMonth;
	}
displayMonth();