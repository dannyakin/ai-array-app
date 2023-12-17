// File: src/ListPlayers.js

import React, { useState } from 'react';
import arrPlayers from './players';
import DisplayPlayer from './DisplayPlayer';
import './App.css';

const ListPlayers = () => {
    const [selectedPlayerId, setSelectedPlayerId] = useState(null);
    const [showPlayersList, setShowPlayersList] = useState(true);
    const [players, setPlayers] = useState(arrPlayers);

    const handleShowDetails = (playerId) => {
        setSelectedPlayerId(playerId);
        setShowPlayersList(false);
    };

    const handleDeleteClick = (playerId) => {
        const updatedPlayers = players.filter((player) => player.id !== playerId);
        setPlayers(updatedPlayers);

        if (selectedPlayerId === playerId) {
            setSelectedPlayerId(null);
            setShowPlayersList(true);
        }
    };

    const handleShowPlayersList = () => {
        setShowPlayersList(true);
        setSelectedPlayerId(null);
    };

    return (
        <section className='w-1140px'>
            <h1>Top 10 Soccer Players</h1>
            {showPlayersList ? (
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Trophies</th>
                            <th>Club</th>
                            <th>Nationality</th>
                            <th>Details</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player) => (
                            <tr key={player.id}>
                                <td>{player.id}</td>
                                <td>
                                    {player.firstName} {player.lastName} ({player.age})
                                </td>
                                <td>{player.trophies}</td>
                                <td>{player.club}</td>
                                <td>{player.nationality}</td>
                                <td>
                                    <button onClick={() => handleShowDetails(player.id)}>
                                        More...
                                    </button>
                                </td>
                                <td>
                                    <button className="delete" onClick={() => handleDeleteClick(player.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <DisplayPlayer playerId={selectedPlayerId} />
            )}

            {/* Toggle button when player details are displayed */}
            {selectedPlayerId && (
                <button onClick={handleShowPlayersList}>Back to List</button>
            )}
        </section>
    );
};

export default ListPlayers;
