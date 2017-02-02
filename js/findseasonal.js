function seasonalLookup() { 

	//currentMonth = findMonth(); //looks up a text version of the actual month
	monthNum = monthPosition()
	// Approach: takes the month object's property (vegetable, lettuce or fruit) and displays it
	v = MONTH[monthNum].vegetables;
	l = MONTH[monthNum].lettuce;
	f = MONTH[monthNum].fruit;

	document.getElementById("vegetables_in_season").innerHTML = "Vegetables: "  + display(v);
	document.getElementById("lettuce_in_season").innerHTML = "Lettuce: "  + display(l);
	document.getElementById("fruit_in_season").innerHTML = "Fruit: "  + display(f);
	
	}
	
seasonalLookup();