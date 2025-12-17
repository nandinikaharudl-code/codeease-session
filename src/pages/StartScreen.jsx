import React from "react";
import { useNavigate } from "react-router-dom";

const StartScreen = () => {
  const navigate = useNavigate();

  const startGame = (level) => {
    navigate("/game", { state: { difficulty: level } });
  };

  return (
    <div className="page">
      <div className="container">
        <h1>Welcome to the Game!</h1>
        <p>Select your difficulty level to start:</p>

        <div className="button-group">
          <button onClick={() => startGame("Easy")}>Easy</button>
          <button onClick={() => startGame("Medium")}>Medium</button>
          <button onClick={() => startGame("Hard")}>Hard</button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
