import React, { Component } from "react";
import PokemonCard from "./Components/PokemonCard";
import EndGame from "./Components/EndGame";
import pokemon from "./pokemon.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.childClickHandler = this.childClickHandler.bind(this);
  }
  /***************** NEED TO REFRESH STATE WHEN TRY AGAIN BUTTON CLICKED*****************/
  childClickHandler() {
    this.setState({
      gameover: false,
      score: 0,
      pokemonList: pokemon,
    });
  }

  state = {
    gameover: false,
    score: 0,
    pokemonList: pokemon,
  };

  //Fisher-Yates (aka Knuth) Shuffle
  shuffle = (array) => {
    let currentIndex = array.length,
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

  clickHandler = (event) => {
    console.log(event.target.selected);
    if (event.target.selected) {
      // if it's true we want to restart the game and display game over message
      this.setState({ gameover: true });
    } else {
      this.setState({ score: this.state.score + 1 });
      event.target.selected = true;
    }
    // re-arrange image cards here
    this.setState({ pokemonList: this.shuffle(this.state.pokemonList) });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Choose a Pokemon!</h1>
          <h3>
            Be sure to choose each Pokemon only once! If you select one that
            you've already chosen: YOU LOSE!
          </h3>
          {this.state.gameover || this.state.score === 10 ? (
            <EndGame
              gameover={this.state.gameover}
              score={this.state.score}
              childClickHandler={this.childClickHandler}
            ></EndGame>
          ) : (
            ""
          )}
          <h2 className="score">
            <strong>Score:</strong> {this.state.score}
          </h2>
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
