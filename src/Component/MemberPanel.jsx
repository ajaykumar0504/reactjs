import React, { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AppContext } from "./AppContext";

const MemberPanel = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div style={{ display: "flex", minHeight: "80vh" }}>
      <aside style={{ width: "250px", background: "#f4f4f4", padding: "20px" }}>
        <h3>Member Menu</h3>
        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Link to="dashboard">Dashboard</Link>
          <Link to="bookings">My Bookings</Link>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: "30px" }}>
        <Routes>
          <Route index element={<h3>Select an option from the sidebar.</h3>} />
          <Route path="dashboard" element={<h3>Welcome back, Elite Member!</h3>} />
          <Route path="bookings" element={
            <div>
              <h3>Active Reservations ({state.bookings.length})</h3>
              {state.bookings.map((b, i) => (
                <div key={i} style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
                  🚗 {b.name} - ${b.price} <button onClick={() => dispatch({type: 'CANCEL_BOOKING', payload: i})}>Cancel</button>
                </div>
              ))}
            </div>
          } />
        </Routes>
      </main>
    </div>
  );
};

export default MemberPanel;