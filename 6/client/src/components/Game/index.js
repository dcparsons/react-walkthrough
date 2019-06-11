import React from "react";

function Game(props) {
    return (
        <div>
            <h3><img src={props.image} alt="Game image"></img> {props.title}</h3>
            <br />
            {props.description}
            <br />
            <button
                onClick={() => props.handleGameSave(props.id)}
            >
                Save
                        </button>
            <hr />
        </div>
    );
}

export default Game;