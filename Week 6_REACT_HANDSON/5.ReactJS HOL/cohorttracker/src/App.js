import React from "react";
import CohortDetails from "./CohortDetails";

function App() {
  return (
    <div>
      <h2>Cohorts Details</h2>
      <CohortDetails
        name="INTADMDF10 - .NET FSD"
        startDate="22-Feb-2022"
        status="Scheduled"
        coach="Aathma"
        trainer="Jojo Jose"
      />
      <CohortDetails
        name="ADM21JF014 - Java FSD"
        startDate="10-Sep-2021"
        status="Ongoing"
        coach="Apoorv"
        trainer="Elisa Smith"
      />
      <CohortDetails
        name="CDBJF21025 - Java FSD"
        startDate="24-Dec-2021"
        status="Ongoing"
        coach="Aathma"
        trainer="John Doe"
      />
    </div>
  );
}

export default App;
