import React from "react";

const endGame = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        minHeight: "50vh",
        backgroundColor: "white",
        marginLeft: "40%",
        width: "20%",
        borderRadius: "20px",
      }}
    >
      <div style={{ marginTop: "30%" }}>
        {props.gameover ? (
          <h1 style={{ color: "red" }}>Game Over!</h1>
        ) : (
          <h1 style={{ color: "green" }}>You Won!</h1>
        )}
        <h3>Your Final Score:</h3>
        {props.score}
      </div>
    </div>
  );
};

export default endGame;
