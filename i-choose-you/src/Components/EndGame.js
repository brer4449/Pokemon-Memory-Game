import React from "react";

const endGame = (props) => {
  return (
    <div className="gameoverCard">
      <div style={{ marginTop: "30%" }}>
        {props.gameover ? (
          <h1 className="gameover">Game Over!</h1>
        ) : (
          <h1 className="winner">You Won!</h1>
        )}
        <h3>Your Final Score:</h3>
        {props.score}
        <button className="resetButton" onClick={props.childClickHandler}>
          Try Again!
        </button>
      </div>
    </div>
  );
};

export default endGame;
