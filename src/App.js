import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";

const NO_PLAYER_NOTICE = <p>Ops, no players to show</p>

function App() {
    const [playerName, setPlayerName] = useState("")
    const [players, setPlayers] = useState([])

    const playerList = players.length === 0 ? NO_PLAYER_NOTICE :
        <ul>{ players.map((playerName, index) => <li id={index}>{playerName}</li>) }</ul>

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
                    <input value={playerName} onChange={(e) => {setPlayerName(e.target.value)}} type="text" name="name"/>
                    <input type="button" value="Add" onClick={() => {
                        setPlayers([...players, playerName])
                        setPlayerName("")
                    }}/>
                </form>
                {playerList}
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
