import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";


function App() {
    const [playerName, setPlayerName] = useState("")
    const [players, setPlayers] = useState(['daigo'])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <title>Street Fighter</title>
            </header>
            <main className="App-content">
                <p>
                    My favorite Street Fighter players
                </p>
                <form>
                    <input onChange={(e) => {setPlayerName(e.target.value)}} type="text" name="name"/>
                    <input type="submit" value="Add"/>
                </form>
                <ul>
                    { players.map((playerName, index) => <li id={index}>{playerName}</li>) }
                </ul>
            </main>
            <footer className="App-footer">
                <p>
                    Made just for you by Paquito and Nando
                </p>
            </footer>
        </div>
    );
}

export default App;
