function monthPosition(){
	var d = new Date(); // Saves date in a variable
	monthPos = d.getMonth(); 	
	// The getMonth() method returns the month (from 0 to 11) for the specified date, according to local time.
	// getMonth() is a built-in JS function
	return monthPos;
}