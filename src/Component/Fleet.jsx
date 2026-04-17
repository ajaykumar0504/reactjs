import React, { useState, useEffect, useCallback, useContext } from "react";
import { AppContext } from "./AppContext";

const Fleet = () => {
  const [cars, setCars] = useState([]);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    // Simulating API data
    const data = [
      { id: 1, name: "Tesla Model S", price: 150, img: "⚡" },
      { id: 2, name: "Porsche 911", price: 350, img: "🏎️" },
      { id: 3, name: "BMW M4", price: 200, img: "🚗" },
    ];
    setCars(data);
  }, []);

  const bookCar = useCallback((car) => {
    dispatch({ type: "ADD_BOOKING", payload: car });
    alert(`${car.name} reserved!`);
  }, [dispatch]);

  return (
    <div style={{ padding: "50px", background: "#121212", color: "#fff", minHeight: "100vh" }}>
      <h2>Available Fleet</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {cars.map(car => (
          <div key={car.id} style={{ background: "#1e1e1e", padding: "20px", borderRadius: "10px", width: "250px", textAlign: "center", border: "1px solid #333" }}>
            <div style={{ fontSize: "50px" }}>{car.img}</div>
            <h3>{car.name}</h3>
            <p>${car.price} / day</p>
            <button onClick={() => bookCar(car)} style={{ background: "#00d4ff", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fleet;