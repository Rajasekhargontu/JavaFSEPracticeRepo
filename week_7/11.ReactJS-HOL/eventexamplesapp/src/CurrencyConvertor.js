import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");
  const [result, setResult] = useState("");
  const conversionRate = 90;

  const handleINRtoEuro = (e) => {
    e.preventDefault();
    if (!rupees || isNaN(rupees)) {
      alert("Please enter a valid amount in Rupees");
      return;
    }
    const euroValue = (rupees / conversionRate).toFixed(2);
    setResult(`₹${rupees} = €${euroValue}`);
  };

  const handleEuroToINR = (e) => {
    e.preventDefault();
    if (!euro || isNaN(euro)) {
      alert("Please enter a valid amount in Euro");
      return;
    }
    const inrValue = (euro * conversionRate).toFixed(2);
    setResult(`€${euro} = ₹${inrValue}`);
  };

  return (
    <div>
      <h2>Currency Convertor (INR ↔ Euro)</h2>
      <form onSubmit={handleINRtoEuro} style={{ marginBottom: "10px" }}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter amount in INR"
        />
        <button type="submit">Convert INR to Euro</button>
      </form>
      <form onSubmit={handleEuroToINR}>
        <input
          type="number"
          value={euro}
          onChange={(e) => setEuro(e.target.value)}
          placeholder="Enter amount in Euro"
        />
        <button type="submit">Convert Euro to INR</button>
      </form>
      {result && (
        <p style={{ marginTop: "16px" }}>{result}</p>
      )}
    </div>
  );
}

export default CurrencyConvertor;