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
}];

// var questions = [{
//     question: "Which movie was not made in the 80's?",
//     answers: ["Breakfast Club", "Revenge Of The Nerds", "Ferris Buillers Day Off", "Star Wars Episode 4 : A New Hope"],
//     correct: 3
// }, {
//     question: "The Material Girl:",
//     answers: ["Cindy Lauper", "Bonnie Tyler", "Madonna", "Chaka Khan"],
//     correct: 2
// }, {
//     question: "One of her earliest hits was 'I wanna dance with somebody:",
//     answers: ["Cher", "Whitney Houston", "Britney Spears", "Tiffany"],
//     correct: 1
// }, {
//     question: "Video game where the main character jumps over crocodiles, lagoons and scorpions in the jungle:",
//     answers: ["Pitfall", "River Raid", "Enduro", "Atari"],
//     correct: 0
// }, {
//     question: "Which dance was made famous by a scene in 'Can't Buy me Love' (1987):",
//     answers: ["The Wave", "Break Dancing", "Tektonic", "African Anteater Ritual"],
//     correct: 3
// }, {
//     question: "What dog had the craziest laugh?",
//     answers: ["Barfy", "Muttley", "Dug the Dog", "McBarker (Mr. Magoo)"],
//     correct: 1
// }, {
//     question: "What is the second best-selling album of all times ?",
//     answers: ["Pink Floyd the Wall - 1982", "Prince purple Rain - 1984", "Madoona Like a Virgin - 1984", "Michael Jackson Thriller - 1983"],
//     correct: 3
// }, {
//     question: "MTV launched in August of....",
//     answers: ["1980", "1981", "1983", "1985"],
//     correct: 2
// }, {
//     question: "What are two fashion statements from the 80's?",
//     answers: ["Crazy hair and shoulder pads", "Bell-bottom pants and hairspray", "High heels and snickers", "Colorful jewelry and sofisticated shoes"],
//     correct: 0
// }, {
//     question: "What is the name of the good Gremlin?",
//     answers: ["Goodie", "That cool gremlin", "Gizmo", "Mogwai"],
//     correct: 2
// }];

//Part B    

//Create the game object 
var game = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    counter: 0,
    userPick: undefined,
    currentQuestion: 0,

    
    start: function () {
        var timerDiv = $("<div class='timer'>").text(game.counter);
        var questionDiv = $("<div class='question'>");
        var answerDiv = $("<div class='answers' id='quiz-answers-area'>");
        timerDiv.attr("id", "counter-number");
        $("#quiz-area").append(timerDiv);
        $("#quiz-area").append(questionDiv);
        $("#quiz-area").append(answerDiv);

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


    compareAnswers: function () {
        console.log(game.userPick);
        if (parseInt(game.userPick) === questions[game.currentQuestion].correct) {
            game.correct++;
            $("#message").text("Congrats! You're right!");
        }
        else {
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
            game.counter = 3;
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
        var results = $("<div class='result'>").text("Correct answers: " + game.correct);
        $("<div class='incorrectAnswers'>").text("Incorrect answers: " + game.incorrect);
        $("#quiz-area").append(results);
    }
}

$("#start").on("click", function () {
    game.start();
    $(this).hide();
});

$(document).on("click", ".answer-button", function (event) {
    game.userPick = $(this).attr('data-answerIndex');
    console.log(game.userPick);
    game.compareAnswers();

    // game.userPick = $(this)
    // console.log($(this).attr("data-answerindex"));
})

//Create document.clcik events at the end for each questions when the game starts
//Whenever the counter reaches 0, you write a message, set a 4 sec. delay, and load a new question with timer at 30




