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
          <h1 style={{ color: "#F08030" }}>Game Over!</h1>
        ) : (
          <h1 style={{ color: "#78C850" }}>You Won!</h1>
        )}
        <h3>Your Final Score:</h3>
        {props.score}
        <button
          style={{
            display: "block",
            backgroundColor: "#6890F0",
            margin: "0 auto",
            marginTop: "20px",
            borderRadius: "5px",
            width: "40%",
          }}
          onClick={props.childClickHandler}
        >
          Try Again!
        </button>
      </div>
    </div>
  );
};

export default endGame;
