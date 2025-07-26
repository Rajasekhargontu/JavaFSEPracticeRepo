import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home"
import TrainersList from "./TrainersLlist";
import TrainerDetail from "./TrainerDetails";
import trainers from "./TrainersMock";

function App() {
  return (
    <Router>
      <div>
        <nav style={{ margin: "10px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/trainers">Trainers</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainersList trainers={trainers} />} />
          <Route path="/trainer/:id" element={<TrainerDetail trainers={trainers} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
