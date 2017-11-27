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
	var table = $('#cards_matrix tbody');
	var tdAcc1 = '';
	var tdAcc2 = '';

	cards.forEach(function(card, index){
		if( index < 4 ) {

			tdAcc1 += '<td id=" ' + index +' ">'+ card.draw + '</td>'

		} else {

			tdAcc2 += '<td id=" ' + index +' ">'+ card.draw + '</td>'
		}

		console.log(card)
	})

	var tr1 = '<tr>' + tdAcc1 + '</tr>';
	var tr2 = '<tr>' + tdAcc2 + '</tr>';

	table.append(tr1)
	table.append(tr2)
}

Shuffle(cards);
dealCard();
