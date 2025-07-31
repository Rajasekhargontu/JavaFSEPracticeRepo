import { useState } from "react";
import ListofPlayers from "./ListofPlayers";
import Scorebelow70 from "./Scorebelow70";
import OddPlayers from "./OddPlayers";
import EvenPlayers from "./EvenPlayers";
import ListofIndianPlayers from "./ListofIndianPlayers";
function App(){
  const[flag,setFlag]=useState(false);
  const players = [
  { name: "Virat Kohli", score: 85 },
  { name: "Rohit Sharma", score: 72 },
  { name: "Chris Gayle", score: 60 },
  { name: "Shreyas Iyer", score: 45 },
  { name: "Hardik Pandya", score: 38 },
  { name: "Ben Stokes", score: 50 },
  { name: "Rishabh Pant", score: 41 },
  { name: "Jasprit Bumrah", score: 15 },
  { name: "Kane Williamson", score: 10 },
  { name: "Kuldeep Yadav", score: 8 },
  { name: "Suryakumar Yadav", score: 33 }
];
const IndianTeam = ["Virat Kohli", "Rohit Sharma", "Jasprit Bumrah", "KL Rahul", "Hardik Pandya", "Ravindra Jadeja", "Shreyas Iyer", "Rishabh Pant", "Mohammed Shami", "Bhuvneshwar Kumar", "Yuzvendra Chahal"];
const T20=["Virat Kohli", "Rohit Sharma", "Jasprit Bumrah", "KL Rahul", "Hardik Pandya", "Ravindra Jadeja", "Shreyas Iyer", "Rishabh Pant", "Mohammed Shami", "Bhuvneshwar Kumar", "Yuzvendra Chahal"];
const Domestic=["Rahane", "Pujara", "Ishan Kishan", "Shubman Gill", "Prithvi Shaw", "Navdeep Saini", "Deepak Hooda", "Shreyas Gopal", "Rahul Tewatia", "Jaydev Unadkat"];
const IndianPlayers = [...T20, ...Domestic]; 
if(flag){
    return(
      <div>
        <button onClick={()=>setFlag(false)}>Toggle</button>
        <h1>List of Players</h1>
        <ListofPlayers players={players}/>
        <hr />
        <h1>List of Players having score Less Than 70</h1>
        <Scorebelow70 players={players}/>
      </div>
    )
  }
  else{
    return(
      <div>
        <button onClick={()=>setFlag(true)}>Toggle</button>
        <div>
          <h1>Indian Team</h1>
          <h1>Odd players</h1>
          {OddPlayers(IndianTeam)}
          <hr />
          <h1>EvenPlayers</h1>
          {EvenPlayers(IndianTeam)}
        </div>
        <hr />
        <div>
          <h1>List of Indian Players Merged:</h1>
          <ListofIndianPlayers IndianPlayers={IndianPlayers}/>
        </div>
      </div>
    )
  }
}

export default App;
