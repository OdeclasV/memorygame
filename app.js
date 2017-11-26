// Array cards containting deck of cards and their illustrations

var cards = [

    {draw: "dog"},
    {draw: "dog"},
    {draw: "tree"},
    {draw: "tree"},
    {draw: "book"},
    {draw: "book"},
    {draw: "tv"},
    {draw: "tv"}

    ]

// shuffle deck of cards

function Shuffle(array) {
	for(var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
	return array;
};


function compareChoices (choice1, choice2) {

/* 
 * Compares two user choices. 
 * Takes user choices as inputs.
 * Outputs True if the choices match.
 */
	return choice1 === choice2;

}

function dealCard () {
	cards.forEach(function(card){

		console.log(card)
	});
}

// use modulo of % 3
// onclick to tds.
// tds should have class of name of the card
// on click gets the class of the card and puts it in a variable
// after two clicks, compareChoices is ran
// add ids to tds as well. Maybe the ids would have the indexes of the elements in array cards 
// 

Shuffle(cards);
dealCard();
