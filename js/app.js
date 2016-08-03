
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn('1000');

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut('1000');
  	});
 // 	/*--- New Game ---*/
 // ------------------------------------------------------------------------------
 	var count = 0 ;
 	var userGuess = "";
 	var randomNumber = Math.floor((Math.random() * 100) + 1);
	
  	$(".new").click(function(){
  		count = 0;
  		randomNumber = Math.floor((Math.random() * 100) + 1);
  		$('#feedback').text('Make your Guess');
  		$('#count').text('0');
  		$('#userGuess').val("");
  		$('#guessList').text("");
  	});

    $('form').submit(function(event){
    	
    	count += 1;
  		$('#count').text(count);

  		userGuess = $('#userGuess').val();
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

  		$("#guessList").append('<li>' + userGuess + '</li>');
   		event.preventDefault();
   	});
   	
});


