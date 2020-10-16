import React, { Component } from "react";
import PokemonCard from "./Components/PokemonCard";
import pokemon from "./pokemon.json";
import "./App.css";

class App extends Component {
  state = {
    gameover: false,
    score: 0,
    pokemonList: pokemon,
  };

  shuffle = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  // Used like so
  // var arr = [2, 11, 37, 42, 55, 13, 29, 30];
  // shuffle(arr);
  // console.log(arr);

  clickHandler = (event) => {
    console.log(event.target.selected);
    if (event.target.selected) {
      // if it's true we want to restart the game and display game over message
      this.setState({ gameover: true });
      setTimeout(function () {
        window.location.reload(false);
      }, 1500);
    } else {
      this.setState({ score: this.state.score + 1 });
      event.target.selected = true;
    }
    // re-arrange image cards here...?
    // this.setState({ pokemonList: "rearranged array" });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Choose a Pokemon!</h1>
          <p>
            But be sure to choose each Pokemon only once! If you select one that
            you've already chosen: <strong>YOU LOSE!</strong>
          </p>
          <h3 className="score">
            <strong>Score:</strong> {this.state.score}
          </h3>
          {this.state.gameover ? (
            <h1 className="gameover">GAME OVER! TRY AGAIN?</h1>
          ) : (
            ""
          )}
          {this.state.pokemonList.map((pokeman) => {
            return (
              <PokemonCard
                name={pokeman.name}
                image={pokeman.image}
                id={pokeman.id}
                key={pokeman.id}
                clicked={this.clickHandler}
                selected={pokeman.alreadyClicked}
              ></PokemonCard>
            );
          })}
        </header>
      </div>
    );
  }
}

export default App;