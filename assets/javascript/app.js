//Part ONE A

//Initialize a variable called questions and make its value an array of objects. 
//The object should have three properties : question, answer, correctAnswer.
//Question will have the value of a string, answer will have the value of an array with 4 elements, 
//and correctAnswer will have the value of a string.

var questions = [{
    question: "What is the capital of France?",
    answers: ["Paris", "Luxembourg", "Barcelona", "Belgium"],
    correctAnswer: "Paris"
}, {
    question: "What is the capital of France?",
    answers: ["Paris", "Luxembourg", "Barcelona", "Belgium"],
    correctAnswer: "Paris"
}, {
    question: "What is the capital of France?",
    answers: ["Paris", "Luxembourg", "Barcelona", "Belgium"],
    correctAnswer: "Paris"
}, {
    question: "What is the capital of France?",
    answers: ["Paris", "Luxembourg", "Barcelona", "Belgium"],
    correctAnswer: "Paris"
}, {
    question: "What is the capital of France?",
    answers: ["Paris", "Luxembourg", "Barcelona", "Belgium"],
    correctAnswer: "Paris"
}, {
    question: "What is the capital of France?",
    answers: ["Paris", "Luxembourg", "Barcelona", "Belgium"],
    correctAnswer: "Paris"
}, {
    question: "What is the capital of France?",
    answers: ["Paris", "Luxembourg", "Barcelona", "Belgium"],
    correctAnswer: "Paris"
}, {
    question: "What is the capital of France?",
    answers: ["Paris", "Luxembourg", "Barcelona", "Belgium"],
    correctAnswer: "Paris"
}, {
    question: "What is the capital of France?",
    answers: ["Paris", "Luxembourg", "Barcelona", "Belgium"],
    correctAnswer: "Paris"
}, {
    question: "What is the capital of France?",
    answers: ["Paris", "Luxembourg", "Barcelona", "Belgium"],
    correctAnswer: "Paris"
}];


//Part ONE B

//Create a 'timer' variable that will hold setInterval
var timer;

var questionTracker = 0;

//Create the game object that will have 3 properties and 4 methods
var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    

    countDown: function(){
        game.counter--;
        $("#counter-number").html(game.counter);
        
        if (game.counter === 0){
            console.log("Your time is up!");
            game.done();
        }
    },

    done: function(){

    },
    
    //After pressing the start button, the timer shows up, 
    //and first questions and answers, and the 'start' button must disappear//
    start: function(){
        var timerDiv = $("<div>").text(game.counter);
        var questionDiv = $("<div>").text(questions[questionTracker].question);
        $("#quiz-area").append(timerDiv);
        $("#quiz-area").append(questionDiv);
        $("#quiz-area").append(questions[questionTracker].answers);
        
        questionTracker++;
        console.log("gamestarted");
    },

    result: function(){

    },
}
 $("#start").on("click", function (){
     game.start();
 })
//Next methods to be crteated are done, start, result
//Cfreate document.clcik events at the end dor each questions when the game starts


