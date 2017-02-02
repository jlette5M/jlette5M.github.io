	//Objects containing data for each month and their properties
	// The MONTH variable is GLOBAL and does not change because seasonal fruit is stored as unchanging data here.
	
	var January = {
		monthName: "January",
		vegetables: ['celery', 'mushrooms', 'chinese cabbage', 'kale', 'potatoes', 'carrots', 'leeks', 'brussel sprouts', 'beetroot', 'red cabbage', 'white cabbage', 'onions'],
		lettuce: ['lambs lettuce'],
		fruit: ['apples', 'walnuts', 'hazelnuts', 'pineapples', 'oranges', 'avacados', 'bananas', 'clementines, satsumas, tangerines', 'grapefruits', 'kiwis', 'lemons'],
	};

	var February = {
		monthName: "February",
		vegetables: ['celery', 'mushrooms', 'chinese cabbage', 'kale', 'potatoes', 'carrots', 'leeks', 'brussel sprouts', 'beetroot', 'red cabbage', 'onions'],
		lettuce: ['lambs lettuce'],
		fruit: ['apples', 'pineapples', 'oranges', 'avacados', 'bananas', 'clementines, satsumas, tangerines', 'grapefruits', 'kiwis', 'lemons'],
	};

	var March = {
		monthName: "March",
		vegetables: ['celery', 'cauliflower', 'mushrooms', 'chinese cabbage', 'potatoes', 'carrots', 'leeks', 'radishes', 'beetroot', 'red cabbage', 'spinach', 'onions'],
		lettuce: [],
		fruit: ['apples', 'pineapples', 'oranges', 'avacados', 'bananas', 'grapefruits', 'kiwis', 'lemons']
	};	

	var April = {
		monthName: "April",
		vegetables: ['cauliflower', 'mushrooms', 'potatoes', 'carrots', 'radishes', 'asparagus', 'spinach', 'tomatoes', 'onions'],
		lettuce: ['butterhead'],
		fruit: ['apples', 'pineapples', 'oranges', 'avacados', 'bananas', 'grapefruits', 'kiwis', 'lemons']
	};

	var May = {
		monthName: "May",
		vegetables: ['eggplant', 'cauliflower', 'beans', 'mushrooms', 'green peas', 'potatoes', 'kohlrabi', 'carrots', 'radishes', 'asparagus', 'spinach', 'tomatoes', 'white cabbage', 'savoy cabbage', 'onions'],
		lettuce: ['batvia', 'oak leaf', 'iceberg', 'curly endive, escarole', 'butterhead', 'lollo rosa', 'dandelion'],
		fruit: ['strawberries', 'bananas', 'kiwis', 'lemons']
	};
		
	var June = {
		monthName: "June",
		vegetables: ['eggplant', 'cauliflower', 'beans', 'broccoli', 'mushrooms', 'green peas', 'potatoes', 'kohlrabi', 'swiss chard', 'carrots', 'pepper', 'radishes', 'cucumbers', 'asparagus', 'spinach', 'turnips', 'tomatoes', 'white cabbage', 'savoy cabbage', 'onions'],
		lettuce: ['batvia', 'oak leaf', 'iceberg', 'curly endive, escarole', 'butterhead', 'lollo rosa', 'dandelion'],
		fruit: ['apricot', 'strawberries', 'raspberries', 'red, black, and white currants', 'sweet cherries', 'peaches, nectarines', 'gooseberries', 'watermelon', 'bananas', 'kiwis', 'lemons']
	};

	var July = {
		monthName: "July",
		vegetables: ['eggplant', 'celery', 'cauliflower', 'beans', 'broccoli', 'mushrooms', 'green peas', 'potatoes', 'kohlrabi', 'swiss chard', 'carrots', 'pepper', 'leeks', 'radishes', 'cucumbers', 'turnips', 'tomatoes', 'onions'],
		lettuce: ['batvia', 'oak leaf', 'iceberg', 'curly endive, escarole', 'butterhead', 'lollo rosa', 'dandelion', 'raddichio'],
		fruit: ['apricot', 'blackberries', 'strawberries', 'blueberries', 'raspberries', 'red, black, and white currants', 'sweet cherries', 'sour cherries', 'Mirabelle plums, Greengage plums', 'peaches, nectarines', 'prune blums, damson plums', 'cranberries', 'gooseberries', 'watermelon', 'grapes', 'bananas', 'kiwis', 'lemons']
	};	

	var August = {
		monthName: "August",
		vegetables: ['eggplant', 'celery', 'cauliflower', 'beans', 'broccoli', 'mushrooms', 'chinese cabbage', 'green peas', 'fennel', 'potatoes', 'kohlrabi', 'pumpkin', 'swiss chard', 'carrots', 'pepper', 'parsnips', 'leeks', 'radishes', 'cucumbers', 'tomatoes', 'corn', 'onions'],
		lettuce: ['batvia', 'oak leaf', 'iceberg', 'curly endive, escarole', 'butterhead', 'lollo rosa', 'dandelion', 'raddichio'],
		fruit: ['apples', 'apricot', 'pears', 'blackberries', 'blueberries', 'raspberries', 'red, black, and white currants', 'sweet cherries', 'sour cherries', 'Mirabelle plums, Greengage plums', 'peaches, nectarines', 'prune blums, damson plums', 'cranberries', 'gooseberries', 'watermelon', 'grapes', 'bananas', 'kiwis', 'lemons']
	};	

	var September = {
		monthName: "September",
		vegetables: ['eggplant', 'celery', 'cauliflower', 'beans', 'broccoli', 'mushrooms', 'chinese cabbage', 'fennel', 'potatoes', 'kohlrabi', 'pumpkin', 'swiss chard', 'horseradish', 'carrots', 'pepper', 'parsnips', 'leeks', 'radishes', 'beetroot', 'red cabbage', 'cucumbers', 'spinach', 'tomatoes', 'white cabbage', 'savoy cabbage', 'corn', 'onions'],
		lettuce: ['batvia', 'oak leaf', 'iceberg', 'curly endive, escarole', 'butterhead', 'lollo rosa', 'dandelion', 'raddichio'],
		fruit: ['apples', 'pears', 'blackberries', 'elderberries', 'peaches, nectarines', 'prune blums, damson plums', 'cranberries', 'watermelon', 'grapes', 'walnuts', 'hazelnuts', 'pineapples', 'kiwis', 'lemons']
	};

	var October = {
		monthName: "October",
		vegetables: ['eggplant', 'celery', 'cauliflower', 'beans', 'broccoli', 'mushrooms', 'chinese cabbage', 'green peas', 'fennel', 'kale', 'potatoes', 'kohlrabi', 'pumpkin', 'swiss chard', 'horseradish', 'carrots', 'pepper', 'parsnips', 'leeks', 'radishes', 'brussel sprouts', 'beetroot', 'red cabbage', 'cucumbers', 'asparagus', 'spinach', 'turnips', 'tomatoes', 'white cabbage', 'savoy cabbage', 'corn', 'onions'],
		lettuce: ['batvia', 'oak leaf', 'iceberg', 'curly endive, escarole', 'lambs lettuce', 'butterhead', 'lollo rosa', 'dandelion', 'raddichio'],
		fruit: ['apples', 'apricot', 'pears', 'blackberries', 'strawberries', 'blueberries', 'raspberries', 'elderberries', 'red, black, and white currants', 'sweet cherries', 'sour cherries', 'Mirabelle plums, Greengage plums', 'peaches, nectarines', 'prune blums, damson plums', 'cranberries', 'gooseberries', 'watermelon', 'grapes', 'walnuts', 'hazelnuts', 'pineapples', 'oranges', 'avacados', 'bananas', 'clementines, satsumas, tangerines', 'grapefruits', 'kiwis', 'lemons']
	};

	var November = {
		monthName: "November",
		vegetables: ['celery', 'cauliflower', 'mushrooms', 'chinese cabbage', 'fennel', 'kale', 'potatoes', 'pumpkin', 'horseradish', 'carrots', 'pepper', 'leeks', 'radishes', 'brussel sprouts', 'beetroot', 'red cabbage', 'cucumbers', 'turnips', 'tomatoes', 'white cabbage', 'savoy cabbage', 'corn', 'onions'],
		lettuce: ['curly endive', 'lambs lettuce'],
		fruit: ['apples', 'pears', 'grapes', 'walnuts', 'hazelnuts', 'pineapples', 'oranges', 'avacados', 'bananas', 'clementines, satsumas, tangerines', 'grapefruits', 'kiwis', 'lemons']
	};

	var December = {
		monthName: "December",
		vegetables: ['celery', 'cauliflower', 'mushrooms', 'chinese cabbage', 'fennel', 'kale', 'potatoes', 'pumpkin', 'horseradish', 'carrots', 'pepper', 'leeks', 'radishes', 'brussel sprouts', 'beetroot', 'red cabbage', 'cucumbers', 'white cabbage', 'savoy cabbage', 'corn', 'onions'],
		lettuce: ['lambs lettuce'],
		fruit: ['apples', 'walnuts', 'hazelnuts', 'pineapples', 'oranges', 'avacados', 'bananas', 'clementines, satsumas, tangerines', 'grapefruits', 'kiwis', 'lemons']
	};

	var MONTH = [January, February, March, April, May, June, July, August, September, October, November, December];