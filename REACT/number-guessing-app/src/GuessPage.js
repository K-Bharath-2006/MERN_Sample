import Button from "./Button";

const GuessPage = ({number,guess,setGuess,score,highScore,msg,bg,handelCheck,handleAgain}) => {
  return (
    <div className="App" style={{ backgroundColor: bg }}>
      <header>
        <h1>Guess My Number!</h1>
        <p class="between">(Between 1 and 20)</p>
        <Button txt = {"Again!"} func = {handleAgain} cn = {"btn again"} />
        <div class="number">{number}</div>
      </header>
      <main>
        <section class="left">
          <input
            type="number"
            class="guess"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
          <Button txt = {"Check!"} func = {handelCheck} cn = {"btn check"} />
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
};


export default GuessPage;