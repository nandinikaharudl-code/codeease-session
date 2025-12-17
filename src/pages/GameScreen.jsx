import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GameScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const difficulty = location.state?.difficulty || "Unknown";

  return (
    <div className="page">
      <div className="container">
        <h1>Game Page</h1>
        <p>
          Selected Difficulty: <strong>{difficulty}</strong>
        </p>

        <button onClick={() => navigate("/")}>Back</button>
      </div>
    </div>
  );
};

export default GameScreen;
