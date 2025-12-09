import './App.css';
import { useState } from "react";


function App() {
  let [number, setNumber] = useState("?");
  let [guess,setGuess] = useState("");
  let [score,setScore] = useState(20);
  let [highScore,setHighScore] = useState(0);
  let [msg,setMsg] = useState("Start Guessing ...");
  let [bg,setBg] = useState("#222");
 
  let [randomNumber,setRandomNumber] = useState(Math.trunc(Math.random() * 20) + 1);
  // console.log(guess);
  // console.log(randomNumber);
 
  function handelCheck() {
    let val = Number(guess);
     if(!val){
        setMsg("Enter the Number First ... ");
    }
    else if(val === randomNumber){
        setNumber(randomNumber);
        setBg("green");
        setMsg("Correct Guess 🎉");
        setHighScore(score > highScore ? score : highScore);
    }
    else if(val > randomNumber){
        setMsg("Too High ...");
        setScore(score - 1);
    }
    else if(val < randomNumber){
        setMsg("Too Low ...");
        setScore(score - 1);
    }
  }
  function handleAgain() {
    setHighScore(score > highScore ? score : highScore);
    setScore(20);
    setBg("#222");
    setNumber('?');
    setMsg("Start guessing...");
    setRandomNumber(Math.trunc(Math.random() * 20) + 1);
    setGuess("");
  }
  return (
    <div className="App" style={{backgroundColor:bg}}>
      <header>
        <h1>Guess My Number!</h1>
        <p class="between">(Between 1 and 20)</p>
        <button class="btn again" onClick={handleAgain}>Again!</button>
        <div class="number">{number}</div>
      </header>
      <main>
        <section class="left">
          <input type="number" class="guess" value={guess} onChange={(e) => setGuess(e.target.value)}/>
          <button class="btn check" onClick={handelCheck}>Check!</button>
        </section>
        <section class="right">
          <p class="message">{msg}</p>
          <p class="label-score">
            💯 Score: <span class="score">{score}</span>
          </p>
          <p class="label-highscore">
            🥇 Highscore: <span class="highscore">{highScore}</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
