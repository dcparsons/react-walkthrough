import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return(
        <div>
            <Link to="/">
                <img src="/img/die.png" alt="20-sided-die" width="50" height="50"></img>
            </Link> | &nbsp;
            <Link to="/">BoardLens</Link> | &nbsp;
            <Link to="/saved">Saved Games</Link>
        </div>
    );
}

export default Nav;