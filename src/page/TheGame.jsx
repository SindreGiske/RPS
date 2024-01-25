import { ChoiceButton } from "../components/components";
import { useState, useEffect } from "react";

export const TheGame = ({ setWins, wins, setLosses, losses }) => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [pcChoice, setPcChoice] = useState("");
  const [result, setResult] = useState("");
  function Win() {
    setWins((wins) => wins + 1);
  }

  function Lose() {
    setLosses((losses) => losses + 1);
  }


  const handleChoice = (choice) => {
    setPlayerChoice(choice);

    const randomNumber = Math.floor(Math.random() * choices.length);
    const pcChoice = choices[randomNumber];
    setPcChoice(pcChoice);

    choose(choice, pcChoice);
  };

  const choices = ["Rock", "Paper", "Scissor"];

  function choose(playerChoice, pcChoice) {
let results;
    if (pcChoice === playerChoice) {
      results = "DRAW";
    } else if (playerChoice === "Rock") {
      if (pcChoice === "Paper") {
        results = "YOU LOSE!";
      } else {
        results = "YOU WIN!";
      }
    } else if (playerChoice === "Paper") {
      if (pcChoice === "Scissor") {
        results = "YOU LOSE!";
      } else {
        results = "YOU WIN!";
      }
    } else {
      if (pcChoice === "Rock") {
        results = "YOU LOSE!";
      } else {
        results = "YOU WIN!";
      }
    }
    results === "YOU WIN!" ? Win() : results === "YOU LOSE!" ? Lose() : "DRAW"
    setResult(results)
    console.log("you choose: " + playerChoice);
    console.log("pc choose: " + pcChoice);
    console.log("result:" + result);
  }

  return (
    <main className="flex flex-col justify-between items-center bg-teal-300 h-[calc(100vh-64px)]">
      <section>
        <div>
          <p>{wins}</p>
          <p>{losses}</p>
          <p>{playerChoice}</p>
          <p>{pcChoice}</p>
          <p>{result}</p>
          <img
            className="w-12 h-12 filter hue-rotate-[100deg] contrast-[200%]"
            src={
              pcChoice === "Rock"
                ? "/Rrock.png"
                : pcChoice === "Paper"
                ? "/Rpaper.png"
                : "/Rscissor.png"
            }
            alt=""
          />
        </div>
        <button onClick={() => Win()}>+1</button>
        <button onClick={() => Lose()}>-1</button>
        <button onClick={() => computerChoose()}>check computer choice</button>
      </section>
      <div className="flex items-center flex-col w-[1000px] overflow-hidden bg-teal-500 rounded-t-[50%] pt-11 -bottom-24 ">
        <h1 className="text-3xl">CHOOSE YOUR HAND</h1>
        <div className="overflow-hidden h-[250px]">
          <ChoiceButton onClick={() => handleChoice("Rock")} href="/Lrock.png" />
          <ChoiceButton onClick={() => handleChoice("Paper")} href="/Lpaper.png" />
          <ChoiceButton
            onClick={() => handleChoice("Scissor")}
            href="/Lscissor.png"
          />
        </div>
      </div>
    </main>
  );
};
