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
	})

	// creates two rows in the table
	var tr1 = '<tr>' + tdLine1 + '</tr>';
	var tr2 = '<tr>' + tdLine2 + '</tr>';

	table.append(tr1);
	table.append(tr2);
}


// shows value of card in the page when the element is clicked
// takes an argument as input
// console.logs the value of the card, its class, as the output
function showCard(elm) {
	elm.innerHTML = elm.getAttribute('class');
	console.log(elm);
}

Shuffle(cards);
dealCard();
