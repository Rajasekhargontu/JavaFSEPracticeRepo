import FlightDetails from "./FlightDetails";

function GuestPage({ onLogin }) {
  return (
    <div>
      <h1>Welcome Guest</h1>
      <FlightDetails />
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default GuestPage;