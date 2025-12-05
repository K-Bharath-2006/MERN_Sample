// 1 We need all the instance
let againBtn = document.querySelector(".again");
let number = document.querySelector(".number");
let guess = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let msg = document.querySelector(".message");

// 2. Generate a Random Number betwenn 1 and 20
let randomNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(randomNumber);


// 2.1 create a varible of score
let scr = 20;

// Button Functionalities
// 1.event  that we want to occur 2. Callback
checkBtn.addEventListener("click", () => {
    if(!guess.value){
        msg.textContent = "Enter the Number First ... ";
    }
    else if(guess.value == randomNumber){
        number.textContent = randomNumber;
        document.body.style.backgroundColor = "green";
        msg.textContent = "Correct Guess 🎉";
        highScore.textContent = scr > highScore.textContent ? scr : highScore.textContent;
    }
    else if(guess.value > randomNumber){
        msg.textContent = "Too High ...";
        scr -= 1;
        score.textContent = scr;
    }
    else if(guess.value < randomNumber){
         msg.textContent = "Too Low ...";
        scr -= 1;
        score.textContent = scr;
    }
});

againBtn.addEventListener("click", ()=> {
    highScore.textContent = scr > highScore.textContent ? scr : highScore.textContent;
    scr = 20;
    score.textContent = scr;
    document.body.style.backgroundColor = "#222";
    number.textContent = "?"
    msg.textContent = "Start guessing...";
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    guess.value = "";
});

