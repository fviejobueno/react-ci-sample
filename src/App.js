import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";


function App() {

    const [playerName, setPlayerName] = useState("")


    return (

        <div className="Form">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    My favorite Street Fighter players
                </p>
                <form>
                    <input onChange={(e) => {setPlayerName(e.target.value)}} type="text" name="name"/>
                    <input type="submit" value="Add"/>
                </form>
                <p>
                    {playerName}
                </p>
            </header>

        </div>

    );
}

export default App;
