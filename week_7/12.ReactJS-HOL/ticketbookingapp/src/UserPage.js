import FlightDetails from "./FlightDetails";

function UserPage({ onLogout }) {
  return (
    <div>
      <h1>Welcome User</h1>
      <FlightDetails />
      <button onClick={() => alert("Ticket Booked!")}>Book Ticket</button>
      <button onClick={onLogout} style={{ marginLeft: "10px" }}>Logout</button>
    </div>
  );
}

export default UserPage;