$(document).ready(function(){

	var players = {
		'red' : true,
		'green' : false,
		'blue' : false
	},

	

	currentPlayersColor = function(){
		
		var flippedPlayers = {};

		flippedPlayers[players["red"]] = "red";
		flippedPlayers[players["green"]] = "green";
		flippedPlayers[players["blue"]] = "blue";

		return flippedPlayers[true];
	},

	restrictClick = function(clickedBox){
		
		var clickedStatus = true;
		
		if(clickedBox.find('span').length){

			var currentPlayersColor = clickedBox.css('border-color'),
				boxOwnerColor = clickedBox.find('span').css('background-color');


			if(currentPlayersColor !== boxOwnerColor){
				clickedStatus = false;
			}	
		}
		return clickedStatus;
	},

	appendBall = function(clickedBox){

		var ball;

		if(clickedBox.find('.ball').length === 1){
			ball = "<span class='ball ball1'></span>";
			clickedBox.find('div').append(ball);
			//clickedBox.find('.ball1').css('margin-left', '30px');
		}
		else if(clickedBox.find('.ball').length === 2){
			ball = "<span class='ball ball2'></span>";
			clickedBox.find('div').append(ball);
			clickedBox.find('.ball2').css('margin-left', '20px');
			clickedBox.find('.ball2').css('margin-top', '25px');

			clickedBox.find('div').addClass('rotateB');

		}
		else if(clickedBox.find('.ball').length === 3){
			
			var prevBox = clickedBox.prev('li'),
				nextBox = clickedBox.next('li'),
				parentRow = clickedBox.parent('ul'),
				prevParentRow = parentRow.prev(),
				nextParentRow = parentRow.next(),
				clickedBoxIndex = clickedBox.index(),
				prevParentBox = prevParentRow.find('li').eq(clickedBoxIndex),
				nextParentBox = nextParentRow.find('li').eq(clickedBoxIndex),
				currentPlayerColor = clickedBox.css('border-color');

			if(prevBox.find('span').length){
				
				if(prevBox.find('span').length === 1){
					ball = "<span class='ball ball1'></span>";	
				}
				else if(prevBox.find('span').length === 2){
					ball = "<span class='ball ball2'></span>";	
				}
				prevBox.find('span').parent().append(ball);
			}
			else{
				ball = "<div><span class='ball'></span></div>";
				prevBox.append(ball);	
			}

			if(nextBox.find('span').length){
				if(nextBox.find('span').length === 1){
					ball = "<span class='ball ball1'></span>";	
				}
				else if(nextBox.find('span').length === 2){
					ball = "<span class='ball ball2'></span>";	
				}
				nextBox.find('span').parent().append(ball);
			}
			else{
				ball = "<div><span class='ball'></span></div>";
				nextBox.append(ball);	
			}

			if(prevParentBox.find('span').length){
				if(prevParentBox.find('span').length === 1){
					ball = "<span class='ball ball1'></span>";	
				}
				else if(prevParentBox.find('span').length === 2){
					ball = "<span class='ball ball2'></span>";	
				}
				prevParentBox.find('span').parent().append(ball);
			}
			else{
				ball = "<div><span class='ball'></span></div>";
				prevParentBox.append(ball);	
			}

			if(nextParentBox.find('span').length){
				if(nextParentBox.find('span').length === 1){
					ball = "<span class='ball ball1'></span>";	
				}
				else if(nextParentBox.find('span').length === 2){
					ball = "<span class='ball ball2'></span>";	
				}
				nextParentBox.find('span').parent().append(ball);
			}
			else{
				ball = "<div><span class='ball'></span></div>";
				nextParentBox.append(ball);	
			}


			
			prevBox.find('span').css('background-color', currentPlayerColor);
	
			nextBox.find('span').css('background-color', currentPlayerColor);

			prevParentBox.find('span').css('background-color', currentPlayerColor);
	
			nextParentBox.find('span').css('background-color', currentPlayerColor);
			
			clickedBox.find('span').remove();

		}
		else{
			
			ball = "<div><span class='ball'></span></div>";
			clickedBox.append(ball);	

		}
	},

	assignPlayerTurn = function(clickedBox){

		if(players["red"]){
			clickedBox.find('.ball').addClass('red');

			$('li').css('border-color', 'green');

			players["red"] = false;
			players["green"] = true;
			players["blue"] = false;
			return;
		}
		
		if(players["green"]){
			clickedBox.find('.ball').addClass('green');

			$('li').css('border-color', 'blue');

			players["red"] = false;
			players["green"] = false;
			players["blue"] = true;
			return;
		}
		
		if(players["blue"]){
			clickedBox.find('.ball').addClass('blue');

			$('li').css('border-color', 'red');

			players["red"] = true;
			players["green"] = false;
			players["blue"] = false;
			return;
		}
	};


	$('li').on('click', function(){

		var $this = $(this);

		var clickedStatus = restrictClick($this);
		
		if(!clickedStatus){
			return;
		}

		appendBall($this);

		assignPlayerTurn($this);

	});
});