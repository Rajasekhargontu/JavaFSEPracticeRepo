function FlightDetails() {
  const flights = [
    { id: 1, from: "Delhi", to: "Mumbai", time: "10:00 AM", price: 4500 },
    { id: 2, from: "Bangalore", to: "Chennai", time: "1:30 PM", price: 3200 },
    { id: 3, from: "Kolkata", to: "Hyderabad", time: "6:45 PM", price: 3900 }
  ];
  return (
    <div>
      <h2>Flight Details</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {flights.map(flight => (
            <tr key={flight.id}>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
              <td>{flight.time}</td>
              <td>₹{flight.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FlightDetails;