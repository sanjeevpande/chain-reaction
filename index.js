$(document).ready(function(){

	var players = {
		'red' : true,
		'green' : false,
		'blue' : false
	};

	$('li').on('click', function(){
		
		var ball;

		if($(this).find('.ball').length === 1){
			ball = "<span class='ball ball1'></span>"
			$(this).find('div').append(ball);
			$(this).find('.ball1').css('margin-left', '30px');
		}
		else if($(this).find('.ball').length === 2){
			ball = "<span class='ball ball2'></span>"
			$(this).find('div').append(ball);
			$(this).find('.ball1').css('margin-left', '20px');
			$(this).find('.ball2').css('margin-top', '25px');

			$(this).find('div').addClass('rotateB');

		}
		else{
			ball = "<div><span class='ball'></span></div>"
			$(this).append(ball);	
		}



		
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