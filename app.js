// choice1 and choice2 variables
// used inside showCard function
// to know users clicked choice

var choice1 = null;
var choice2 = null;
var matches = [];

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

    ];

// shuffle deck of cards

function Shuffle(array) {
	for(var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
	return array;
}

// passes in each in the deck to a table for rendering.
// takes no inputs.
// creates table rows and elements for each card as outputs.

function dealCard () {
	var table = $('#cards_matrix tbody'); // selects the body of the table
	var tdLine1 = '';
	var tdLine2 = '';

	cards.forEach(function(card, index){
		if( index < 4 ) {  // conditional to evaluate when to stop creating tds and when to create a new row

			// four tds are created, from indexes 0 to 3 
			// tds have their index as id and their value as class 
			tdLine1 += '<td id=" ' + index + ' "class="'+ card.draw + '" onclick="showCard(this)">{ secret }</td>';

		} else {

			// when above condtion is not met, four indexes are created, fom 4 to 7
			// tds have their index as id and their value as class 
			tdLine2 += '<td id=" ' + index + ' "class="'+ card.draw + '" onclick="showCard(this)">{ secret }</td>';
		}

		console.log(card);
	});

	// creates two rows in the table
	var tr1 = '<tr>' + tdLine1 + '</tr>';
	var tr2 = '<tr>' + tdLine2 + '</tr>';

	table.append(tr1);
	table.append(tr2);
}


// shows value of card in the page when the element is clicked
// takes an elementg as input
// console.logs the value of the card, its class, as the output

function showCard(elm) {

	if (choice1 === null) {
		choice1 = elm;
		choice1.innerHTML = elm.getAttribute('class');

	} else if (choice2 === null) {
		choice2 = elm;
		choice2.innerHTML = elm.getAttribute('class');
			// evaluates if value of choice1 and choice2 are the same
			if (choice1.innerHTML === choice2.innerHTML) {
				// creates var id1 and id2 to get ids of each element
				var id1 = choice1.getAttribute('id');
				var id2 = choice2.getAttribute('id');
				console.log("here are the ids");				
				console.log(id1);
				console.log(id2);

				// evaluates ids of each element
				// when ids are different,
				// and classes are similar
				// elements are equal

				if (id1 != id2) {

					matches.push(choice1.innerHTML);
					matches.push(choice2.innerHTML);
					if (matches.length === cards.length) {
						console.log('game over')
					}
				}
		
		choice1 = null;
		choice2 = null;

			}

	} else {
		
		// converts element back to secret
		// user tries again 
		choice1.innerHTML = '{ secret }';
		choice2.innerHTML = '{ secret }';
		choice1 = null;
		choice2 = null;

	}
	// console.log("here's the completed array")
	// console.log(matches)

}

if (matches.length === cards.length) {
	console.log('game over');
	console.log(matches);
}
Shuffle(cards);
dealCard();

