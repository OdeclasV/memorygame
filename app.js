// deck of cards

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
