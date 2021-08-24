import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from "react";

const NO_PLAYER_NOTICE = <p>Ops, no players to show</p>

function App() {
    const [playerName, setPlayerName] = useState("")
    const [players, setPlayers] = useState([])

    const playerList = players.length === 0 ? NO_PLAYER_NOTICE :
        <ul>{ players.map((playerName, index) => <li key={index}>{playerName}</li>) }</ul>

    const onSubmit = e => {
        e.preventDefault()
        setPlayers([...players, playerName])
    }

    useEffect(() => { setPlayerName("") } , [players])

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
                <form onSubmit={onSubmit}>
                    <input value={playerName} onChange={e => setPlayerName(e.target.value)} type="text" name="name"/>
                    <input type="submit" value="Add" />
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
