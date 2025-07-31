import React from 'react'

function ListofIndianPlayers(props) {
 
  return (
    <ul>
      {props.IndianPlayers.map((player) => (
        <li>{player}</li>
      ))}
    </ul>
  );
}

export default ListofIndianPlayers