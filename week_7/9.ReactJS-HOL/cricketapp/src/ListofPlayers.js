import React from "react";

export default function ListofPlayers(props) {
  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {props.players.map((player, index) => (
          <li key={index}>
            {player.name} - Score: {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}