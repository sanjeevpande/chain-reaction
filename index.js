$(document).ready(function(){

	var players = {
		'red' : true,
		'green' : false,
		'blue' : false
	};

	$('li').on('click', function(){
		var ball = "<span class='ball'></span>"
		$(this).append(ball);
		if(players["red"]){
			$(this).find('.ball').addClass('red');
			players["red"] = false;
			players["green"] = true;
			players["blue"] = false;
			return;
		}
		if(players["green"]){
			$(this).find('.ball').addClass('green');
			players["red"] = false;
			players["green"] = false;
			players["blue"] = true;
			return;
		}
		if(players["blue"]){
			$(this).find('.ball').addClass('blue');
			players["red"] = true;
			players["green"] = false;
			players["blue"] = false;
			return;
		}
	});
});