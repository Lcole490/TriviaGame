// *********************************************************ALL VARIABLES********************************************


var categoryChoice= basicQuestions;          //variable that determines which bank of questions user will get for the round (ex: categoryChoice=sportsQuestions)
var number = 30;
var scantron = ["A", "B", "C", "D"];
var intervalId;
var category;
var qTimer;                 //Variable for the 30 second question timer
var quesAmount;           // Variable that keeps track of how many questions are asked in the round. For this game the player will get 5 total questions
var correctCount;         // Variable that keeps track of how many questions the player gets correct in a round
var incorrectCount;         // Variable that keeps track of how many questions the player gets incorrect in a round
var contestantScore;        //Variable used to present contestant's percentage score (correctCount/quesAmount * 100)











// *********************************Objects For Gameplay*******************************************************************



var basicQuestions = {

  ask: ["Name the number that is three more than one-fifth of one-tenth of one-half of 5000:", "What is the only U.S. State that only borders one other?", "What's the missing number?", "What's the oldest continuously inhabited city in the world?", "Two people are standing back to back. They each walk away from each other for 3 feet. Then, they both turn left and walk for another four feet, and then stop. Now how many feet apart are they standing?"],

  choices: [[503, 103, 53, 108], ["Rhode Island", "Maine", "Washington", "Florida"],[20, 21, 25, 27],["Istanbul, Turkey", "Athens, Greece", "Jerusalem", "Damascus, Syria" ],[10, 7, 25, 5]],

  answers:[53, "Maine", 21, "Damascus, Syria", 10]
 
}

var sportsQuestions = {
  
  ask: ["Which of these NBA teams has never won a Championship?", "How many strikes make a perfect game in bowling?","Which is the only country to have played in each and every World Cup?", "What is the maximum time limit allowed to look for a lost ball in golf?", "Which sport is played on the biggest pitch in terms of area?"],

  choices:[["Indiana Pacers", "New York Knicks", "Milwaukee Bucks", "Houston Rockets"], [11, 10, 12, 13] , ["Germany", "Brazil", "England", "Portugal"] , ["30 minutes", "5 minutes", "1 hour", "10 minutes"], ["Polo", "Soccer", "Rugby", "Cricket"]],

  answers:["Indiana Pacers", 12, "Brazil", "5 minutes", "Polo"]



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




// ******************************************************END OF OBJECTS FOR GAMEPLAY**************************************************

 
//  *************************************TIMER FUNCTION***************************************************
 
 function run() {
    clearInterval(intervalId);
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
    if (number === 0) {

      //  ...run the stop function.
      stop();
    }
}

run();
decrement();

// ****************************************END OF TIME FUNCTION***********************************************************************

// ****************************OTHER FUNCTIONS**************************************************************************

for ( quesAmount=0; quesAmount < 5; quesAmount++){
  var categoryChoice= basicQuestions;
  var askDiv = $("<div>");
  askDiv.addClass("quesPlace");
  $(".questionsdiv").append(askDiv);
  $(".quesPlace").text(categoryChoice.ask[0]);

  console.log(categoryChoice.ask[0]);
  console.log(categoryChoice.ask[1]);
  

  for (var a=0; a < 4; a++){


    var multChoiceDiv = $("<div>");
    multChoiceDiv.addClass("ansOptions");
    $(".ansOptions").text(scantron[a] + "  " + categoryChoice.choices[a][0]);
    $(".ansOptions").text(scantron[a] + "  " + categoryChoice.choices[a][1]);
    $(".ansOptions").text(scantron[a] + "  " + categoryChoice.choices[a][2]);
    $(".ansOptions").text(scantron[a] + "  " + categoryChoice.choices[a][3]);
    $(".answerchoicesdiv").append(multChoiceDiv);
    console.log(scantron[a] + categoryChoice.choices[0][a]);
  }



}






//********************************************GAMEPLAY ***************************************************************************8 */