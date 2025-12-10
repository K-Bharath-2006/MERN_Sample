import "./App.css";
import { useState } from "react";
import Guess from "./GuessPage";

function App() {
  let [number, setNumber] = useState("?");
  let [guess, setGuess] = useState("");
  let [score, setScore] = useState(20);
  let [highScore, setHighScore] = useState(0);
  let [msg, setMsg] = useState("Start Guessing ...");
  let [bg, setBg] = useState("#222");

  let [randomNumber, setRandomNumber] = useState(
    Math.trunc(Math.random() * 20) + 1
  );

  function handelCheck() {
    let val = Number(guess);
    if (!val) {
      setMsg("Enter the Number First ... ");
    } else if (val === randomNumber) {
      setNumber(randomNumber);
      setBg("green");
      setMsg("Correct Guess 🎉");
      setHighScore(score > highScore ? score : highScore);
    } else if (val > randomNumber) {
      setMsg("Too High ...");
      setScore(score - 1);
    } else if (val < randomNumber) {
      setMsg("Too Low ...");
      setScore(score - 1);
    }
  }
  function handleAgain() {
    setHighScore(score > highScore ? score : highScore);
    setScore(20);
    setBg("#222");
    setNumber("?");
    setMsg("Start guessing...");
    setRandomNumber(Math.trunc(Math.random() * 20) + 1);
    setGuess("");
  }
  return (
    <div className="App">
      <Guess
        number={number}
        guess={guess}
        setGuess={setGuess}
        score={score}
        highScore={highScore}
        msg={msg}
        bg={bg}
        handelCheck={handelCheck}
        handleAgain={handleAgain}
      />
    </div>
  );
}

export default App;
