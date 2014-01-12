$(document).ready(function(){


	var players,
		doAllPlayersClicked = false;

	
	$('#start').on('click', function(){
		
		
		var noOfPlayers = parseInt($('#inputBox').val(), 10);

		if(noOfPlayers < 2 || noOfPlayers > 10){

			alert("Players can be max 10 and min 2");
			return;
		}

		$('.inputContainer').addClass('hide');
		$('.container').removeClass('hide').addClass('show');
		$('body').css('background-color', '#888830');

		var ballColors = ['red', 'green', 'blue', 'yellow', 'pink', 'brown', 'cyan', 'violet', 'indigo', 'orange'];

		var JSONString = '{';

		for(var i=0; i<noOfPlayers; i++){

			//JSONString += '"'+ballColors[i]+'"'+':'+'{"turn":'+false+','+'"isAlive"'+':'+true+'},';

			JSONString += '"'+ballColors[i]+'"'+':'+false+',';

		}

		JSONString += '}';

		JSONString = JSONString.replace(",}","}");

		players = $.parseJSON(JSONString);

		players[Object.keys(players)[0]] = true;

		var x = 5;

	});

	var	restrictClick = function(clickedBox){
		
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

	currentPlayerObject = function(){

		var currentPlayer;

		for(var playerColor in players){

			if(players[playerColor]){
				currentPlayer = playerColor;
				break;
			}
		}

		return currentPlayer;

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
				currentPlayerColor = clickedBox.css('border-top-color'),
				cPlayerColor = currentPlayerObject();

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
				prevBox.find('span').attr('data-color', cPlayerColor);
		
				nextBox.find('span').css('background-color', currentPlayerColor);
				nextBox.find('span').attr('data-color', cPlayerColor);

				prevParentBox.find('span').css('background-color', currentPlayerColor);
				prevParentBox.find('span').attr('data-color', cPlayerColor);
		
				nextParentBox.find('span').css('background-color', currentPlayerColor);
				nextParentBox.find('span').attr('data-color', cPlayerColor);

			}
			else{
				
				ball = "<span class='ball ball1'></span>";
				clickedBox.find('div').append(ball);
				clickedBox.find('span').attr('data-color', cPlayerColor);
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
				prevBox.find('span').attr('data-color', cPlayerColor);

				nextBox.find('span').css('background-color', currentPlayerColor);
				nextBox.find('span').attr('data-color', cPlayerColor);

				prevParentBox.find('span').css('background-color', currentPlayerColor);
				prevParentBox.find('span').attr('data-color', cPlayerColor);

				nextParentBox.find('span').css('background-color', currentPlayerColor);
				nextParentBox.find('span').attr('data-color', cPlayerColor);

			}
			else{

				ball = "<span class='ball ball2'></span>";
				clickedBox.find('div').append(ball);
				clickedBox.find('.ball2').css('margin-left', '20px');
				clickedBox.find('.ball2').css('margin-top', '25px');
				
				clickedBox.find('span').attr('data-color', cPlayerColor);

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
			prevBox.find('span').attr('data-color', cPlayerColor);

			nextBox.find('span').css('background-color', currentPlayerColor);
			nextBox.find('span').attr('data-color', cPlayerColor);

			prevParentBox.find('span').css('background-color', currentPlayerColor);
			prevParentBox.find('span').attr('data-color', cPlayerColor);	

			nextParentBox.find('span').css('background-color', currentPlayerColor);
			nextParentBox.find('span').attr('data-color', cPlayerColor);

		}
		else{
			
			ball = "<div><span class='ball'></span></div>";
			clickedBox.append(ball);	
			clickedBox.find('span').attr('data-color', cPlayerColor);

		}
	},

	appendToClickedBox = function(clickedBox, boxObject, currentPlayerColor){

		if(!boxObject.length){
			return;
		}

		var cPlayerColor = currentPlayerObject();

		if(boxObject.find('span').length){
			if(boxObject.find('span').length === 1){

				if(clickedBox[0] === $('ul:first').find('li:first')[0]
					|| clickedBox[0] === $('ul:first').find('li:last')[0]
					|| clickedBox[0] === $('ul:last').find('li:first')[0]
					|| clickedBox[0] === $('ul:last').find('li:last')[0]){

					boxObject.find('span').css('background-color', currentPlayerColor);
					boxObject.find('span').attr('data-color', cPlayerColor);
					boxObject.trigger('myClick');
				}
				else{
					ball = "<span class='ball ball1'></span>";	
					boxObject.find('span').parent().append(ball);
					boxObject.find('span').attr('data-color', cPlayerColor);

					if(boxObject.find('span').length > 1 && (boxObject[0] === $('ul:first').find('li:first')[0]
						|| boxObject[0] === $('ul:first').find('li:last')[0]
						|| boxObject[0] === $('ul:last').find('li:first')[0]
						|| boxObject[0] === $('ul:last').find('li:last')[0])){

						boxObject.find('span').css('background-color', currentPlayerColor);
						boxObject.find('span').attr('data-color', cPlayerColor);
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
					boxObject.find('span').attr('data-color', cPlayerColor);
					boxObject.trigger('myClick');

				}
				else{
					ball = "<span class='ball ball2'></span>";	
					boxObject.find('div').addClass('rotateB');
					boxObject.find('span').parent().append(ball);
					boxObject.find('span').attr('data-color', cPlayerColor);


					if(boxObject.find('span').length > 2 && (boxObject[0] === $('ul:first').find('li').eq(boxObject.index())[0]
						|| boxObject[0] === $('ul:last').find('li').eq(boxObject.index())[0]
						|| boxObject[0] === $('ul').find('li:first').eq(boxObject.parent().index())[0]
						|| boxObject[0] === $('ul').find('li:last').eq(boxObject.parent().index())[0])){

						boxObject.find('span').css('background-color', currentPlayerColor);
						boxObject.find('span').attr('data-color', cPlayerColor);
						boxObject.trigger('myClick');
					}
				}
			}
			else if(boxObject.find('span').length === 3){
				boxObject.find('span').css('background-color', currentPlayerColor);
				boxObject.find('span').attr('data-color', cPlayerColor);
				boxObject.trigger('myClick');
			}	
		}
		else{
			ball = "<div><span class='ball'></span></div>";
			boxObject.append(ball);
			boxObject.find('span').attr('data-color', cPlayerColor);	
		}
	},

	

	counter = 0,


	checkPlayersAvailability = function(playersList){

		var isPlayerEliminated = false,
			currentPlayerColor = $('li').css('border-top-color');

		for(var i=0; i<playersList.length; i++){

			if(doAllPlayersClicked && !$('span[data-color='+playersList[i]+']').length){

				delete players[playersList[i]];

			}
		}
	},

	
	

	assignPlayerTurn = function(clickedBox){	

		var playersList = Object.keys(players);

		checkPlayersAvailability(playersList);

		playersList = Object.keys(players);


		if(playersList.length === 1){

			alert(playersList[0]+" win.");
			$('li').off('click');
			return;
		}

		if(players[playersList[counter]]){
			
			clickedBox.find('.ball').addClass(playersList[counter]);


			if(counter === playersList.length-1){

				counter = -1;

				doAllPlayersClicked = true;

			}


			$('li').css('border-color', playersList[counter+1]);

			for(player in players){

				players[player] = false;
			}

			players[playersList[counter+1]] = true;

			counter++;

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