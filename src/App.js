import React from 'react';
import './App.css';
import characters from "./characters.json"
import CharacterDisplay from "./components/CharacterDisplay"

class App extends React.Component {
    state = {
        characters: [...characters],
        currentScore: 0,
        highestScore: 0,
        gameOver: false,
        gameStart: false
    }

    characterClicked = (id) => {
        var charArray = [...this.state.characters];
        var index = this.state.characters.findIndex(character => {
            return character.id === id;
        });

        if (this.state.characters[index].clicked === false) {
            charArray[index].clicked = true;
            this.setState(() => ({
                gameStart: true,
                characters: charArray,
                currentScore: this.state.currentScore + 1
            }));
        }
        else {
            if (this.state.highestScore < this.state.currentScore) {
                this.setState({ highestScore: this.state.currentScore })
            }

            const newArray = this.state.characters.map(item => {
                item.clicked = false;
                return item;
            })

            this.setState({
                currentScore: 0,
                characters: [...newArray],
                gameOver: true
            });

            setTimeout(() => { this.setState({ gameOver: false, gameStart: false }) }, 2000);
        }

        this.shuffle();
        console.log(this.state.characters)
    };

    shuffle = () => {
        var newArray = [...this.state.characters];
        var random, temp, index;
        for (index = newArray.length - 1; index > 0; index--) {
            random = Math.floor(Math.random() * (index + 1));
            temp = newArray[index];
            newArray[index] = newArray[random];
            newArray[random] = temp;
        }
        this.setState({ characters: newArray })
    }

    render() {
        return (
            <div className="main-div">
                <div className="navbar">
                    <ul className="nav">
                        <li className="nav-item nav-title">Memory Game</li>
                        <li className="nav-item">{this.state.gameStart ? (this.state.gameOver ? "Already clicked! Game Over!" : "You guessed correctly!") : "Click an image to start the game!"}</li>
                        <li className="nav-item">
                            <span className="score-span">Score: {this.state.currentScore}  </span>
                            <span>Highest Score: {this.state.highestScore}</span>
                        </li>
                    </ul>
                </div>
                <header className="header">
                    <h1 className="display-4">Memory Game</h1>
                </header>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className={this.state.gameOver ? "col-md-8 img-container img-shake" : "col-md-8 img-container"}>

                        {this.state.characters.map(item => {
                            return (<CharacterDisplay
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                characterClicked={this.characterClicked}
                            />)
                        })}
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        )
    }
}


export default App;
