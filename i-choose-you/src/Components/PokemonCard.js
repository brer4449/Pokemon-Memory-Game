import React from "react";

const pokemonCard = (props) => {
  return (
    <>
      <img
        className="img"
        alt={props.name}
        src={props.image}
        id={props.id}
        selected={props.selected}
        onClick={props.clicked}
      ></img>
    </>
  );
};

export default pokemonCard;
