import React, { Component } from "react";

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
        this.getGames();
    };

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