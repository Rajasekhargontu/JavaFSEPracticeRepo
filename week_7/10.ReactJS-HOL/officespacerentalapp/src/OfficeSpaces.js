import React from "react";

const officeSpaces = [
  {
    name: "Tech Park",
    rent: 55000,
    address: "123 Main St, Bengaluru",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Business Bay",
    rent: 75000,
    address: "456 Market Rd, Mumbai",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Startup Hub",
    rent: 60000,
    address: "789 Startup Ave, Hyderabad",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  }
];

function OfficeSpaces() {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Office Spaces Available at Affordable Prices</h1>
      {officeSpaces.map((office, idx) => (
        <div key={idx} style={{ border: "1px solid #ccc",  padding: "16px", borderRadius: "8px",display:"inline-block",margin:"70px"}}>
          <img src={office.image} alt={office.name} style={{ width: "400px", height: "320px", objectFit: "cover" }} />
          <h2>Name: {office.name}</h2>
          <p>
            Rent:{" "}
            <span style={{ color: office.rent < 60000 ? "red" : "green", fontWeight: "bold" }}>
              ₹{office.rent}
            </span>
          </p>
          <p>Address: {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default OfficeSpaces;