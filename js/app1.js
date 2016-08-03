
$(document).ready(function(){
   var count = 0 ;
 	 var userGuess = "";
 	 var randomNumber = Math.floor((Math.random() * 100) + 1);
	
  $(".new").click(function(){
      count = 0;
      userGuess = "";
  		newGame();
  	});

  $('form').submit(function(event){
    	count += 1;
      userGuess = $('#userGuess').val();
      updateCount(count);
  		printFeedback(randomNumber,userGuess);
  		updateUserGuessList();
      validateInput();
  		event.preventDefault();
      
   	});
  var newGame = function(){
    randomNumber = generateRandomNumber();
    $('#feedback').text('Make your Guess');
    $('#count').text('0');
    $('#userGuess').val("");
    $('#guessList').text("");
  }
  var generateRandomNumber = function(){
  return Math.floor((Math.random() * 100) + 1);
  }
  var updateCount = function(count){
  $('#count').text(count);
  }
  var printFeedback = function(randomNumber){
  
    var difference = Math.abs(randomNumber-userGuess);

    if(difference>=50){
      $('#feedback').text('Ice Cold');
    }
    if(difference>=30 && difference<50){
      $('#feedback').text('Cold');
    }
    if(difference>=20 && difference<30){
      $('#feedback').text('Warm');
    }
    if(difference>=10 && difference<20){
      $('#feedback').text('Cold');
    }
    if(difference>=1 && difference<10){
      $('#feedback').text('Ice Cold');
    }
  }
  var updateUserGuessList = function(){
      $("#guessList").append('<li>' + userGuess + '</li>');
  }
  var validateInput = function(){
    if(userGuess>100){
      alert('invalid input');
    }
 }
   	
});



