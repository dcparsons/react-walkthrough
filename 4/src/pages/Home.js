import React, { Component } from "react";
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
        this.setState({
            games: API.getGamesByTitle(query)
        });
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
                    <b>Do something with games</b>
                ) : (
                        <b>{this.state.message}</b>
                    )}

            </div>
        );
    }
}

export default Home;