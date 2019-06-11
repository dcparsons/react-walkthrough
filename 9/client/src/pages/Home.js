import React, { Component } from "react";

import Game from "../components/Game" 

import API from "../util/API";

class Home extends Component {
    state = {
        games: [],
        query: "",
        message: "Search For A Game To Begin!"
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getGamesByTitle(this.state.query);
    };

    getGamesByTitle(query){
        console.log(API.getGamesByTitle(query));

        API.getGamesByTitle(query)        
        .then(results =>
            this.setState({
                games: results.data.games
            })
        );

        
        //This code would throw an error, comment it out for now. 
        // .then(res =>
        //     this.setState({
        //         games: res.games
        //     }))
        // .catch(() =>
        //     this.setState({
        //       games: [],
        //       message: "No new games found! Boo..."
        //     })
        //   );
    }

    handleSaveGame(id){
        alert("In a completed app this was save the game with ID: " + id);
    }

    render() {
        return (
            <div>
                <br /><br />
                <form>
                    <div>
                        <label htmlFor="Query">
                            <strong>Game: </strong>
                        </label>
                        <input
                            id="Title"
                            type="text"
                            value={this.state.query}
                            placeholder="Magic"
                            name="query"
                            onChange={this.handleInputChange}
                            required
                        />
                        <button
                            onClick={this.handleFormSubmit}
                            type="submit"
                        >
                            Search
                    </button>
                    </div>
                </form>
                <hr></hr>
                {this.state.games.length ? (
                            <div>
                                {this.state.games.map(game => (
                                    
                                    <Game
                                        key = {game.id}
                                        id = {game.id}
                                        title = {game.name}
                                        image = {game.images.thumb}
                                        description = {game.description}
                                        handleGameSave = {this.handleSaveGame}>

                                    </Game>
                                ))}
                            </div>
                ) : (
                        <b>{this.state.message}</b>
                    )}

            </div>
        );
    }
}

export default Home;