import React from 'react';

const Scorebelow70 = (props) => {
    const filteredPlayers = props.players.filter(player => player.score < 70);

    return (
        <div>
            <h2>Players with Scores Below 70</h2>
            <ul>
                {filteredPlayers.map(player => (
                    <li key={player.name}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Scorebelow70;