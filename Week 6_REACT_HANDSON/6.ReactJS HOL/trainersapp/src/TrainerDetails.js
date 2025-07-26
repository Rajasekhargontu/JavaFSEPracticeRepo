import React from "react";
import { useParams, Link } from "react-router-dom";

const TrainerDetail = ({ trainers }) => {
  const { id } = useParams();
  const trainer = trainers.find((t) => t.trainerId === parseInt(id, 10));

  if (!trainer) {
    return (
      <div>
        <h2>Trainer Not Found</h2>
        <Link to="/trainers">Back to Trainers List</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{trainer.name}</h2>
      <p><strong>Email:</strong> {trainer.email}</p>
      <p><strong>Phone:</strong> {trainer.phone}</p>
      <p><strong>Technology:</strong> {trainer.technology}</p>
      <p><strong>Skills:</strong> {trainer.skills.join(", ")}</p>
      <Link to="/trainers">Back to Trainers List</Link>
    </div>
  );
};

export default TrainerDetail;
