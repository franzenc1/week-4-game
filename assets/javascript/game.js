
 //On page load
        //Create variables (and set them to default values)
            //computerRandomNumber = random number between 19 and 120
              var computerRandomNumber = Math.floor(Math.random() * 120) + 19;
              var crystalClickedValue = Math.floor(Math.random() * 12) +1;
            // array of crystal valuess = array of number values (4 values, all random numbers between 1 and 12)
              var arrayofCrystalValues = [
              	crystalClickedValue,
            	crystalClickedValue,
            	crystalClickedValue,
            	crystalClickedValue,
            	]

            for (var i = 0; i < arrayofCrystalValues.length; i++) {
            	var imageCrystal = $("<img>");
            	imageCrystal.addClass("crystal-image");
            	imageCrystal.attr("src", "assets/images/crystal-one.jpeg");
            	imageCrystal.attr("data-crystalvalue", arrayofCrystalValues[i]);
            	$("#crystals").append(imageCrystal);
            }
              var wins = 0;
              var losses = 0;
              var userTotalScore = 0;
          
          function reset() {
          	 $("#randomNumber").text(computerRandomNumber);
          	 userTotalScore === 0;
          	 $("#userScore").text(userTotalScore);
          }

          	

       $(document).ready(function() {
          //Call reset function
              reset();
          //Call  update items on the page function
          $("#randomNumber").text(computerRandomNumber)
        //On crystal click:
           
            //figure out which crystal they clicked and store in a variable
            

      $("#crystal-image").on("click", function() {
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    
    
            //Store crystal value in variable (crystalClickedValue)
            crystalValue = parseInt(crystalClickedValue);
            //Add crystalClickedValue to user total score
            userTotalScore += crystalValue;
            //Update page to reflect User total score on the page
            $("#userScore").text(userTotalScore);
	})
        //if they win (userTotalScore === computerRandomNumber)
        	if (userTotalScore === computerRandomNumber) {
        		// Add 1 to wins
        		wins++;
        		 // Reset computerRandomNumber, array of crystal values, user total score
        		reset();

            // Reset computerRandomNumber, array of crystal values, user total score
        		userTotalScore === 0;
        	//Update the page to put new wins, computerRandomNumber, userTotalScore on the page
        		$('#winsCounter').text(wins);
        	}
            
        	
        //If they lose 
        if (userTotalScore > computerRandomNumber) {
        	// Add 1 to losses
        	losses ++;
        	 // Reset computerRandomNumber, array of crystal values, user total score
        	 reset();
        	  //Update the page to put new losses, computerRandomNumber, userTotalScore on the page
        	  $('#lossesCounter').html(losses);
        }
}
          

        //Update items on the page
          //Put wins variable on page
          //Put losses on page
          //Put computerRandomNumber on page
          //Put user total score on page

        //Reset (function);
          //userTotalScore = 0
          //computerRandomNumber = new random number between 19 and 120
          //array of crystal values (new random numbers between 1 and 12)





    


      // $(".crystal-one").on("click", function() {

      //     randomNumber = Math.floor(Math.random() * 12) +1;
      //     $("#random-number").html(randomNumber);}

      // $(".crystal-two").on("click", function() {
      // 	   randomNumber = Math.floor(Math.random() * 12) +1;
      //     $("#random-number").html(randomNumber);}

      // $(".crystal-three").on("click", function() {
      // 	   randomNumber = Math.floor(Math.random() * 12) +1;
      //     $("#random-number").html(randomNumber);}

      // $(".crystal-four").on("click", function() {
      // 	   randomNumber = Math.floor(Math.random() * 12) +1;
      //     $("#random-number").html(randomNumber);}

      