// Array cards containting deck of cards and their illustrations

var cards = [

    {card: 1, draw: "dog"},
    {card: 2, draw: "dog"},
    {card: 3, draw: "tree"},
    {card: 4, draw: "tree"},
    {card: 5, draw: "book"},
    {card: 6, draw: "book"},
    {card: 7, draw: "tv"},
    {card: 8, draw: "tv"}

    ]

// shuffle deck of cards

function Shuffle(array) {
	for(var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
	return array;
};


function compareChoices (cardNumber1, cardNumber2) {

/* 
 * Compares two user choices. 
 * Takes two cards numbers are input. 
 * Outputs a string noting if the cards match or don't match
 */
	var choice1 = cards[cardNumber1 - 1].draw;
	var choice2 = cards[cardNumber2 - 1].draw;
	
	if (choice1 === choice2) {
		return "They match!";
	} 
	else {
		return "Cards don't match. Try again.";
	}

}


// function choiceOne (card_number) {
// 	var choice1 = cards[card_number - 1].draw; 
// 	return choice1;
// };
