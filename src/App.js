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
                    Include Player Name.
                </p>
                <form>
                    <label>
                        Name:
                        <input onChange={(e) => {setPlayerName(e.target.value)}} type="text" name="name"/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <p>
                    {playerName}
                </p>
            </header>

        </div>

    );
}

export default App;
