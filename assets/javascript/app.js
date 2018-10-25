//Part ONE A

//Initialize a variable called questions and make its value an array of objects. 
//The object should have three properties : question, answer, correct answer.
//Question will have the value of a string, answer will have the value of an array with 4 elements, 
//and correct answer will have the value of a number (index).

var questions = [{
    question: "Which movie was not made in the 80's?",
    answers: ["Breakfast Club", "Revenge Of The Nerds", "Ferris Buillers Day Off", "Star Wars Episode 4 : A New Hope"],
    correct: 3
}, {
    question: "The Material Girl:",
    answers: ["Cindy Lauper", "Bonnie Tyler", "Madonna", "Chaka Khan"],
    correct: 2
}, {
    question: "One of her earliest hits was 'I wanna dance with somebody:",
    answers: ["Cher", "Whitney Houston", "Britney Spears", "Tiffany"],
    correct: 1
}, {
    question: "Video game where the main character jumps over crocodiles, lagoons and scorpions in the jungle:",
    answers: ["Pitfall", "River Raid", "Enduro", "Atari"],
    correct: 0
}, {
    question: "Which dance was made famous by a scene in 'Can't Buy me Love' (1987):",
    answers: ["The Wave", "Break Dancing", "Tektonic", "African Anteater Ritual"],
    correct: 3
}, {
    question: "What dog had the craziest laugh?",
    answers: ["Barfy", "Muttley", "Dug the Dog", "McBarker (Mr. Magoo)"],
    correct: 1
}, {
    question: "What is the second best-selling album of all times ?",
    answers: ["Pink Floyd the Wall - 1982", "Prince purple Rain - 1984", "Madoona Like a Virgin - 1984", "Michael Jackson Thriller - 1983"],
    correct: 3
}, {
    question: "MTV launched in August of....",
    answers: ["1980", "1981", "1983", "1985"],
    correct: 2
}, {
    question: "What are two fashion statements from the 80's?",
    answers: ["Crazy hair and shoulder pads", "Bell-bottom pants and hairspray", "High heels and snickers", "Colorful jewelry and sofisticated shoes"],
    correct: 0
}, {
    question: "What is the name of the good Gremlin?",
    answers: ["Goodie", "That cool gremlin", "Gizmo", "Mogwai"],
    correct: 2
}];

//Part ONE B

var userPick = null;
var currentQuestion = 0;

//Create the game object that will have 4 properties and 4 methods
var game = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    counter: 3,

    //After pressing the start button, the timer shows up, 
    //first questions and answers, and the 'start' button must disappear//
    start: function () {
        var timerDiv = $("<div class='timer'>").text(game.counter);
        var questionDiv = $("<div class='question'>");
        timerDiv.attr("id", "counter-number");
        $("#quiz-area").append(timerDiv);
        $("#quiz-area").append(questionDiv);
        
        console.log("gamestarted");
        game.loadQuestion();
    },

    countDown: function () {
        game.counter--;
        $("#counter-number").html(game.counter);

        if (game.counter <= 0) {
            game.timeUp();
        }
    },

    chosenAnswer: function (answerIndex) {
        
    },


    compareAnswers: function () {

        if (userPick === questions[currentQuestion].correct) {
        game.correct++;
        $("#message").text("Congrats! You're right!");
        }
        else  {
            game.incorrect++
            $("#message").text("Too bad, you're wrong!");
        }
        setTimeout(function () {
            game.loadQuestion ();
            $('#message').text("")
        }, 3000);
    },

    timeUp: function () {
        $("#message").text("Your time is up!");
        clearInterval(timerInterval);
        currentQuestion++;
        setTimeout(function () {
            game.loadQuestion ();
            $('#message').text("")
        }, 3000);
      
    },

    loadQuestion: function () {
        game.counter = 3;
        $("#counter-number").html(game.counter);
        // timerInterval = setInterval(game.countDown, 1000);
        $(".question").text(questions[currentQuestion].question);
        $("#quiz-answers-area").html(" ");
        for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
            $("#quiz-answers-area").append("<button class='answer-button' data-answerIndex='" + i
                + "'>" + questions[currentQuestion].answers[i] + "</button>");
        }
    },

    results: function () {

    },
}

$("#start").on("click", function () {
    game.start();
    $(this).hide();
});

$("#quiz-answers-area").click(".answer-button", function (event) {
    console.log($(event.target).data('answerIndex'))
    // game.chosenAnswer();
})

//Create document.clcik events at the end for each questions when the game starts
//Whenever the counter reaches 0, you write a message, set a 4 sec. delay, and load a new question with timer at 30




