// File: src/DisplayPlayer.js

import React from 'react';
import arrPlayers from './players';
import './App.css';


const DisplayPlayer = ({ playerId }) => {
    const player = arrPlayers.find((p) => p.id === playerId);

    if (!player) {
        return <section>No player found with the specified ID.</section>;
    }

    return (
        <section>
            <h2>{player.firstName} {player.lastName}</h2>
            <p><strong>Age:</strong> {player.age}</p>
            <p><strong>Club:</strong> {player.club}</p>
            <p><strong>Nationality:</strong> {player.nationality}</p>
            <p><strong>Trophies:</strong> {player.trophies}</p>
            <p><strong>Bio:</strong> {player.bio}</p>
        </section>
    );
};

export default DisplayPlayer;
