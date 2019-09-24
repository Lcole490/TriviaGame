// *********************************************************ALL VARIABLES********************************************


var categoryChoice= basicQuestions;          //variable that determines which bank of questions user will get for the round (ex: categoryChoice=sportsQuestions)
var number = 30;
var scantron = ["A", "B", "C", "D"];
var intervalId;
var category;
var qTimer;                 //Variable for the 30 second question timer
var quesAmount= 0;           // Variable that keeps track of how many questions are asked in the round. For this game the player will get 5 total questions
var correctCount= 0;         // Variable that keeps track of how many questions the player gets correct in a round
var incorrectCount =0;         // Variable that keeps track of how many questions the player gets incorrect in a round
var contestantScore;        //Variable used to present contestant's percentage score (correctCount/quesAmount * 100)
var qAnswered;
var qUnanswered = 0;
var selResponse;
var score =0;











// *********************************Objects For Gameplay*******************************************************************



var basicQuestions = {

  ask: ["Name the number that is three more than one-fifth of one-tenth of one-half of 5000:", "What is the only U.S. State that only borders one other?", "Who is the creator of Covfefe?", "What's the oldest continuously inhabited city in the world?", "What is the highest score possible with three darts on a standard dart board? "],

  choices: [[503, 103, 53, 108], ["Rhode Island", "Maine", "Washington", "Florida"],["Starbucks", "Steve Jobs", "Donald Trump", "Nikola Tesla"],["Istanbul, Turkey", "Athens, Greece", "Jerusalem", "Damascus, Syria" ],[100, 300, 150, 180]],

  answers:[53, "Maine", "Donald Trump", "Damascus, Syria",180],

  pics: ["../images/confusedmath.gif", " "]
 
}

var sportsQuestions = {
  
  ask: ["Which of these NBA teams has never won a Championship?", "How many strikes make a perfect game in bowling?","Which is the only country to have played in each and every World Cup?", "What is the maximum time limit allowed to look for a lost ball in golf?", "Which sport is played on the biggest pitch in terms of area?"],

  choices:[["Indiana Pacers", "New York Knicks", "Milwaukee Bucks", "Houston Rockets"], [11, 10, 12, 13] , ["Germany", "Brazil", "England", "Portugal"] , ["30 minutes", "5 minutes", "1 hour", "10 minutes"], ["Polo", "Soccer", "Rugby", "Cricket"]],

  answers:["Indiana Pacers",12, "Brazil", "5 minutes", "Polo"]


}


var impossibleQuestions = {

  ask: ["Which is the name given to one of the fundamental principles of quantum physics?", "Which of these scientists was the first to theorize quantized energy?", "You can find these in a car, but they are also important for astronauts in rocket ships. What are they?", "What is a duel between three people called?", "How many languages are written from right to left?"],

  choices:[["Biparticle Policy" , "The Mixed Double of Quantum Mechanics" , "Twin Particle Constellation", "Wave Particle Duality"], ["Albert Einstein", "Werner Heisenberg", "Edward Schrodinger", "Max Planck", ], ["Tires", "Airbags", "Gas Pedal", "Mats"], ["A Thruel", "A Threat", "A Duel", "A Fight"], [12, 3, 15, 27]],

  answers: ["Wave Particle Duality ", "Max Planck", "Airbags", "A Thruel", 12  ]




}

var responses = {

  good: ["Congratulations, You Got It Correct!", "Wow, You're a Genius!", "How Did You Get That Right?", "You're Killing It. Good Job!", "You Guessed Correctly", "Amazing Answer!", "Correct....Did You Google The Answer?", "That's Correct! Are you related to Albert Einstein?"],

  bad: ["Wow, You Really Got It Wrong There...", " Yeah....That Was The Wrong Answer", "You Almost Had The Right Answer", "Congrats, You Got It Wrong!!!", "How Confident Were You About That Wrong Answer?","Sorry, Better Luck Next Time", "Wnat Is The Opposite Of Correct? Oh Yeah...Incorrect!!!", "Wrong, Just Completely Wrong!!!"]

  
}

var results = "You have completed this round of Trivia. Let's take a look at your stats..."

var timeout = " You Ran Out Of Time !!!"




// ******************************************************END OF OBJECTS FOR GAMEPLAY**************************************************




// Hover Function%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%





//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

 
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^TIMER FUNCTION^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 
 function run() {
    clearInterval(intervalId);
    qAnswered = true;
    intervalId = setInterval(decrement, 1000);
  }

  function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }



function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#countdown").text("Time Remaining: "+ number);

    //  Once number hits zero...
    if (number < 1) {

    qAnswered = false;
      stop();
      
      
      // checkAns();
    }
}



// ****************************************END OF TIME FUNCTION***********************************************************************

// ****************************OTHER FUNCTIONS**************************************************************************


function setQuestion(){
    
    $(".rightorwrong").empty();
    $(".answerpic").empty();
    $(".results").empty();
    $(".correctans").empty();
    $(".incorrectans").empty();
    $(".unanswered").empty();
    $(".score").empty();

  var topic = (Math.floor(Math.random() * 3)); // Allows for randomly choosing category of questions
  var categoryChoice;
  if (topic===0){
    categoryChoice = basicQuestions;

  } else if(topic === 1){

    categoryChoice = sportsQuestions;
  } else {

    categoryChoice= impossibleQuestions;
  }
console.log(topic);
console.log(categoryChoice);

  
  var askDiv = $("<div>");
  askDiv.addClass("quesPlace");
  $(".questionsdiv").append(askDiv);
  $(".quesPlace").html(categoryChoice.ask[quesAmount]);
  

  for (var a=0; a < scantron.length; a++){

    $(".rightorwrong").empty();
    $(".answerpic").empty();
    $(".results").empty();
    $(".correctans").empty();
    $(".incorrectans").empty();
    $(".unanswered").empty();
    $(".score").empty();

// debugger;
    var multChoiceDiv = $("<div>");
    multChoiceDiv.addClass("ansOptions");
    multChoiceDiv.attr("data-id", categoryChoice.choices[quesAmount][a]);

    multChoiceDiv.html(categoryChoice.choices[quesAmount][a]);
    $(".answerchoicesdiv").append(multChoiceDiv);
   
    console.log(scantron[a] + categoryChoice.choices[quesAmount][a]);
  }



  run();          //Sets up Clock
  decrement();      //Counts down the Clock

  $(".ansOptions").on("click", function(){

     selResponse = ($(this).attr("data-id"));

     console.log($(this).attr("data-id"));

     console.log(selResponse);

     console.log(categoryChoice.answers[quesAmount]);

    

    stop();
    // checkAns();
    number =30;


        var ran = (Math.floor(Math.random() * 8));   // Allows for randomly selecting message
      
    $(".questionsdiv").empty();
    $(".answerchoicesdiv").empty();

    if ((selResponse === categoryChoice.answers[quesAmount])&&(qAnswered === true)){

      correctCount ++;
      // place code here for message to be displayed
      $(".rightorwrong").text(responses.good[ran]);

    } else if((selResponse !== categoryChoice.answers[quesAmount])&&(qAnswered === true)){

      incorrectCount ++;
      // place code to let user know what the correct answer was

      // $(".rightorwrong").text("The correct answer was: " + categoryChoice.answers[quesAmount]);

      //place code here for message to be displayed

      $(".rightorwrong").text(responses.bad[ran] +  "The correct answer was: " + categoryChoice.answers[quesAmount]);
    } else {

      $(".questionsdiv").empty();
    $(".answerchoicesdiv").empty();

      $(".rightorwrong").text(timeout + "The correct answer was: " + categoryChoice.answers[quesAmount]);

      qUnanswered ++;

      // place code for you ran out of time and were not able to make a selection

      //place code to let user know what the correct answer was

      qanswered= true;          //reset the qanswered for other questions
    }

    if (quesAmount === 4){

      setTimeout(finalscore, 5000);

    } else{

      quesAmount ++;
      setTimeout(setQuestion, 5000);
    }














    
  });

}



//********************************************GAMEPLAY ***************************************************************************8 */

$(document).ready(function(){

setQuestion();    //Sets up Question and Multiple Choice to be selected
// run();          //Sets up Clock
// decrement();      //Counts down the Clock
})





  function finalscore(){
    $('#countdown').empty();
    $('.rightorwrong').empty();
   
    // $('#gif').empty();

    
    $('.results').html(results);
    $('.correctans').html("Correct Answers: " + correctCount);
    $('.incorrectans').html("Incorrect Answers: " + incorrectCount);
    $('.unanswered').html("Unanswered: " + qUnanswered);
    score = ((correctCount/5) * 100);
    $(".score").html(" For This Round You Scored: " + score + "%");

    $('#restartBtn').on('click', function(){
      $(this).hide();
      setQuestion();

    });

    $('#restartBtn').addClass('reset');
    $('#restartBtn').show();
    $('#restartBtn').html('Try Another Quiz?');
    quesAmount=0;
  }