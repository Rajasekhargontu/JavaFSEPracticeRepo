import React from "react";
import styles from "./CohortDetails.module.css";

const CohortDetails = ({ name, startDate, status, coach, trainer }) => {
  // Decide color based on status (blue for Scheduled, green for Ongoing)
  const headingStyle = {
    color:
      status.toLowerCase() === "ongoing"
        ? "green"
        : "blue"
  };

  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>{name}</h3>
      <dl>
        <dt>Started On</dt>
        <dd>{startDate}</dd>
        <dt>Current Status</dt>
        <dd>{status}</dd>
        <dt>Coach</dt>
        <dd>{coach}</dd>
        <dt>Trainer</dt>
        <dd>{trainer}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
