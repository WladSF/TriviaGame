//Super Trivia Quiz

//Initialize a variable called questions and make its value an array of objects. 
//Create an object with the required properties.
//Question will have the value of a string, answer will have the value of an array with 4 elements,
//and correct answer will have the value of a number (index).

var questions = [{
    question: "Which movie was not made in the 80's?",
    answers: ["Breakfast Club", "Revenge Of The Nerds", "Ferris Buillers Day Off", "Star Wars Episode 4 : A New Hope"],
    correct: 3
}, {
    question: "Who sings 'True Colors' ?",
    answers: ["Madonna", "Bonnie Tyler", "Cindy Lauper", "Chaka Khan"],
    correct: 2
}, {
    question: "Who said 'Crack is wack' ? ",
    answers: ["Snoop Dog", "Whitney Houston", "Britney Spears", "A-HA"],
    correct: 1
}, {
    question: "Name of first mainstream video game console:",
    answers: ["Atari", "River Raid", "Enduro", "Pitfall"],
    correct: 0
}, {
    question: "Which dance was made famous by a scene in 'Can't Buy me Love' (1987):",
    answers: ["The Wave", "Break Dancing", "Tektonic", "African Anteater Ritual"],
    correct: 3
}, {
    question: "Which dog had the craziest laugh?",
    answers: ["Barfy", "Muttley", "Dug the Dog", "McBarker (Mr. Magoo)"],
    correct: 1
}, {
    question: "What is the second best-selling album of all times ?",
    answers: ["Pink Floyd - The Wall 1982", "Prince - Purple Rain 1984", "Madonna - Like a Virgin 1984", "Michael Jackson - Thriller 1983"],
    correct: 3
}, {
    question: "MTV launched in August....",
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

//Create the game object (global variable) with necessary properties and all functions inside. 
var game = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    counter: 0,
    userPick: undefined,                                                        //User's answer choice.
    currentQuestion: 0,                                                         //Current question being displayed.


    start: function () {                                                        //Function that starts the game after the 'start button is pressed
        var timerDiv = $("<div class='timer'>").text(game.counter);             //Dinamically created a div, gave it a class name of 'timer', added to it the text of the 'counter' property, and stored it all inside a variable named timerDiv.
        var questionDiv = $("<div class='question'>");                          //Dinamically created a div and gave it a class name of 'question'
        var answerDiv = $("<div class='answers' id='quiz-answers-area'>");      //Dinamically created a div and gave it a class and id names.
        timerDiv.attr("id", "counter-number");                                  //Set a 'counter-number' id attribute to the timerDiv.
        $("#quiz-area").append(timerDiv);                                       //Selected the quiz area and appended the timerDiv to it, with game.counter inside.                                              
        $("#quiz-area").append(questionDiv);                                    //Selected the quiz area and appended the questionDiv to it.      
        $("#quiz-area").append(answerDiv);                                      //Selected the quiz area and appended the answerDiv to it.      
        game.loadQuestion();                                                    //Called (activated) the loadQuestion function. 
    },

    countDown: function () {                                                    //Create count down function.
        game.counter--;
        $("#counter-number").html(game.counter);

        if (game.counter <= 0) {
            game.timeUp();
        }
    },

    compareAnswers: function () {
        console.log(game.userPick);
        if (parseInt(game.userPick) === questions[game.currentQuestion].correct) {
            game.correct++;
            $("#message").text("Congrats! You're right!");
        } else {
            game.incorrect++
            $("#message").text("Too bad, you're wrong!");
        }

        setTimeout(function () {
            game.currentQuestion++;
            game.loadQuestion();
            $('#message').text("")
        }, 3000);
        clearInterval(timerInterval);
        console.log(game.correct);
    },

    timeUp: function () {
        $("#message").text("Your time is up!");
        clearInterval(timerInterval);
        game.currentQuestion++;
        setTimeout(function () {
            game.loadQuestion();
            $('#message').text("")
        }, 3000);

    },

    loadQuestion: function () {
        if (game.currentQuestion === questions.length) {
            game.results();
        }

        else {
            game.counter = 25;
            $("#counter-number").html(game.counter);
            timerInterval = setInterval(game.countDown, 1000);
            $(".question").text(questions[game.currentQuestion].question);
            $("#quiz-answers-area").html(" ");
            for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
                $("#quiz-answers-area").append("<button class='answer-button' data-answerIndex='" + i
                    + "'>" + questions[game.currentQuestion].answers[i] + "</button>");
            }
        }
    },

    results: function () {
        $("#quiz-area").empty();
        var results = $("<p>RESULTS</p>")
        var resetBtn = $("<button class='reset'>").text("Restart");
        var unanswered = $("<div class='unanswered'>").text("Unanswered: " + (questions.length - (this.incorrect + this.correct)));
        var correctAnswers = $("<div class='correctAnswers'>").text("Correct answers: " + game.correct);
        var incorrectAnswers = $("<div class='incorrectAnswers'>").text("Incorrect answers: " + game.incorrect);
        $("#quiz-area").append(results);
        $("#quiz-area").append(correctAnswers);
        $("#quiz-area").append(incorrectAnswers);
        $("#quiz-area").append(unanswered);
        $("#quiz-area").append(resetBtn);
    },

    reset: function () {
        this.correct = 0;
        this.incorrect = 0;
        this.unanswered = 0;
        this.counter = 0;
        this.userPick = undefined;
        this.currentQuestion = 0;
        this.loadQuestion();
    }
}

$(document).on("click", ".reset", game.reset.bind(game));

$("#start").on("click", function () {
    game.start();
    $(this).hide();
});

$(document).on("click", ".answer-button", function (event) {
    game.userPick = $(this).attr('data-answerIndex');
    console.log(game.userPick);
    game.compareAnswers();
})


