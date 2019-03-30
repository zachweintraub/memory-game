var positions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var click1;
var click2;
var clickCount = 0;
var matchCount = 0;
var totalClicks = 0;

function assignCard(a) {
	if(clickCount === 0) {
		click1 = a;
		clickCount++;
	} else if(clickCount === 1) {
		click2 = a;
		clickCount++;
	}
};

function calcScore(n) {
	return (16 / n) * 100;
};
function shuffle(array) {
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
		totalClicks++;
		$(this).toggle();
		$(this).prev().toggle();
		$(this).prev().addClass('showing');
		assignCard($(this).prev().attr('class'));
		if(clickCount === 2) {
			if(click1 === click2) {
				setTimeout(function() {
					console.log('it is a match!');
					matchCount++;
					$('.showing').after('<img src="img/blank.jpeg">');
					$('.showing').remove();
					if(matchCount === 8) {
						if(confirm('You win! Your score: ' + parseInt(calcScore(totalClicks)) + '/100. Play again?')) {
							location.reload();
						}
					}
				}, 1000);
			} else {
				setTimeout(function() {
					clickCount = 0;
					$('.showing').toggle();
					$('.showing').siblings().toggle();
					$('.showing').removeClass('showing');
				}, 1000);
			}
			clickCount = 0;
		}
	});
	$('[class^="pic"]').click(function(){
		$(this).toggle();
		$(this).next().toggle();
	});
});
