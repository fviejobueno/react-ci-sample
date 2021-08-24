import logo from './logo.svg';
import './App.css';

import React, {useState} from "react";

import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function App() {

    const [playerName, setPlayerName] = useState("")
    const [players, setPlayers] = useState([])

    return (

        <div className="Form">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    New Player name is <code>{playerName}</code>
                </p>
                <form>
                    <label>
                        Name:
                        <input onChange={(e) => {
                            setPlayerName(e.target.value)
                        }} type="text" name="name"/>
                    </label>
                    <AwesomeButton
                        type="primary"
                        ripple={true}
                        onPress={() => {
                            const newList = players.concat({name: playerName, id: Math.random()})
                            setPlayers(newList)
                        }}
                    >
                        Save
                    </AwesomeButton>
                </form>
                <ul>
                    {players.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </header>

        </div>

    );
}

export default App;
