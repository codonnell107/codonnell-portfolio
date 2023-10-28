// alert("This is working");
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

//To show that the game has started.
var level = 0;
var gameStarted = false;

//JQuery to detect a keyboard press:
$(document).keydown(function (){
    if (!gameStarted) {

        //change H1 to show what level the user is on.
        $("#level-title").text("level " + level);
        nextSequence();
        gameStarted = true;
    }
});

//JQuery picks up which buttons are clicked and should trigger an action.
$(".btn").click(function (){

    //Stores which colour the choose has choosen's button ID.
    var userChosenColour = $(this).attr("id");

    //Adding the user's colour to the userClickedPattern array:
    userClickedPattern.push(userChosenColour);

    console.log(userClickedPattern);

    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
    // if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("Success");

        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
            }, 1000);
        } 
    } else {

        console.log("wrong");
        playSound("wrong");

        //Changes the colour of the screen when the game is over:
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over"); 
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }
}

function nextSequence() {

    //resets the array and advances the level.
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);

    $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    //3. Take the code we used to play sound in the nextSequence() function and add it to playSound().
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}