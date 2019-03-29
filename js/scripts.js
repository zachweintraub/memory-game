var positions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

$(function(){
	var click1 = '';
	var click2 = '';
  shuffle(positions);
	for(var i=0; i < 8 ; i++) {
		$('#pos'+ positions[i]).prepend('<img class="pic'+i+'" src="img/pic' + (i+1) + '.jpeg">');
		$('#pos'+ positions[positions.length - i - 1]).prepend('<img class="pic'+i+'" src="img/pic' + (i+1) + 'a.jpeg">');
	};
	$('#start').click(function(){
		$('[class^="pic"]').hide();
		$('.question').show();
	});
	$('.question').click(function(){
		$(this).toggle();
		$(this).prev().toggle();
		click1 = $(this).prev().attr('class');
		console.log(click1);
	});
	$('[class^="pic"]').click(function(){
		$(this).toggle();
		$(this).next().toggle();

	});




	});
