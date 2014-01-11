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

			var currentPlayersColor = clickedBox.css('border-top-color'),
				boxOwnerColor = clickedBox.find('span').css('background-color');


			if(currentPlayersColor !== boxOwnerColor){
				clickedStatus = false;
			}	
		}
		return clickedStatus;
	},

	appendBall = function(clickedBox){

		var ball;

		var prevBox = clickedBox.prev('li'),
				nextBox = clickedBox.next('li'),
				parentRow = clickedBox.parent('ul'),
				prevParentRow = parentRow.prev(),
				nextParentRow = parentRow.next(),
				clickedBoxIndex = clickedBox.index(),
				prevParentBox = prevParentRow.find('li').eq(clickedBoxIndex),
				nextParentBox = nextParentRow.find('li').eq(clickedBoxIndex),
				currentPlayerColor = clickedBox.css('border-top-color');

		if(clickedBox.find('.ball').length === 1){
			
			if(clickedBox[0] === $('ul:first').find('li:first')[0]
				|| clickedBox[0] === $('ul:first').find('li:last')[0]
				|| clickedBox[0] === $('ul:last').find('li:first')[0]
				|| clickedBox[0] === $('ul:last').find('li:last')[0]){

				
				clickedBox.find('div').remove();


				appendToClickedBox(clickedBox, prevBox, currentPlayerColor);
				appendToClickedBox(clickedBox, nextBox, currentPlayerColor);
				appendToClickedBox(clickedBox, prevParentBox, currentPlayerColor);
				appendToClickedBox(clickedBox, nextParentBox, currentPlayerColor);


				prevBox.find('span').css('background-color', currentPlayerColor);
		
				nextBox.find('span').css('background-color', currentPlayerColor);

				prevParentBox.find('span').css('background-color', currentPlayerColor);
		
				nextParentBox.find('span').css('background-color', currentPlayerColor);

				/*event.stopPropogation();*/
			}
			else{
				
				ball = "<span class='ball ball1'></span>";
				clickedBox.find('div').append(ball);
			}
		}
		else if(clickedBox.find('.ball').length === 2){

			if(clickedBox[0] === $('ul:first').find('li').eq(clickedBox.index())[0]
				|| clickedBox[0] === $('ul:last').find('li').eq(clickedBox.index())[0]
				|| clickedBox[0] === $('ul').find('li:first').eq(clickedBox.parent().index())[0]
				|| clickedBox[0] === $('ul').find('li:last').eq(clickedBox.parent().index())[0]){

				
				clickedBox.find('div').remove();


				appendToClickedBox(clickedBox, prevBox, currentPlayerColor);
				appendToClickedBox(clickedBox, nextBox, currentPlayerColor);
				appendToClickedBox(clickedBox, prevParentBox, currentPlayerColor);
				appendToClickedBox(clickedBox, nextParentBox, currentPlayerColor);


				prevBox.find('span').css('background-color', currentPlayerColor);
		
				nextBox.find('span').css('background-color', currentPlayerColor);

				prevParentBox.find('span').css('background-color', currentPlayerColor);
		
				nextParentBox.find('span').css('background-color', currentPlayerColor);

				/*event.stopPropogation();*/
			}
			else{

				ball = "<span class='ball ball2'></span>";
				clickedBox.find('div').append(ball);
				clickedBox.find('.ball2').css('margin-left', '20px');
				clickedBox.find('.ball2').css('margin-top', '25px');

				clickedBox.find('div').addClass('rotateB');

			}

		}
		else if(clickedBox.find('.ball').length === 3){
			
			

			
			clickedBox.find('div').remove();


			appendToClickedBox(clickedBox, prevBox, currentPlayerColor);
			appendToClickedBox(clickedBox, nextBox, currentPlayerColor);
			appendToClickedBox(clickedBox, prevParentBox, currentPlayerColor);
			appendToClickedBox(clickedBox, nextParentBox, currentPlayerColor);


			prevBox.find('span').css('background-color', currentPlayerColor);
	
			nextBox.find('span').css('background-color', currentPlayerColor);

			prevParentBox.find('span').css('background-color', currentPlayerColor);
	
			nextParentBox.find('span').css('background-color', currentPlayerColor);


		}
		else{
			
			ball = "<div><span class='ball'></span></div>";
			clickedBox.append(ball);	

		}
	},

	appendToClickedBox = function(clickedBox, boxObject, currentPlayerColor){

		if(!boxObject.length){
			return;
		}

		if(boxObject.find('span').length){
			if(boxObject.find('span').length === 1){

				if(clickedBox[0] === $('ul:first').find('li:first')[0]
					|| clickedBox[0] === $('ul:first').find('li:last')[0]
					|| clickedBox[0] === $('ul:last').find('li:first')[0]
					|| clickedBox[0] === $('ul:last').find('li:last')[0]){

					boxObject.find('span').css('background-color', currentPlayerColor);
					boxObject.trigger('myClick');
				}
				else{
					ball = "<span class='ball ball1'></span>";	
					boxObject.find('span').parent().append(ball);

					if(boxObject.find('span').length > 1 && (boxObject[0] === $('ul:first').find('li:first')[0]
						|| boxObject[0] === $('ul:first').find('li:last')[0]
						|| boxObject[0] === $('ul:last').find('li:first')[0]
						|| boxObject[0] === $('ul:last').find('li:last')[0])){

						boxObject.find('span').css('background-color', currentPlayerColor);
						boxObject.trigger('myClick');
					}					
				}
			}
			else if(boxObject.find('span').length === 2){
				
				if(clickedBox[0] === $('ul:first').find('li').eq(clickedBox.index())[0]
					|| clickedBox[0] === $('ul:last').find('li').eq(clickedBox.index())[0]
					|| clickedBox[0] === $('ul').find('li:first').eq(clickedBox.parent().index())[0]
					|| clickedBox[0] === $('ul').find('li:last').eq(clickedBox.parent().index())[0]){

					boxObject.find('span').css('background-color', currentPlayerColor);
					boxObject.trigger('myClick');

				}
				else{
					ball = "<span class='ball ball2'></span>";	
					boxObject.find('div').addClass('rotateB');
					boxObject.find('span').parent().append(ball);
				}
			}
			else if(boxObject.find('span').length === 3){
				boxObject.find('span').css('background-color', currentPlayerColor);
				boxObject.trigger('myClick');
			}	
		}
		else{
			ball = "<div><span class='ball'></span></div>";
			boxObject.append(ball);	
		}
	}

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


	$('li').on('myClick', function(){

		var $this = $(this);

		var clickedStatus = restrictClick($this);
		
		if(!clickedStatus){
			return;
		}

		appendBall($this);

	});

});