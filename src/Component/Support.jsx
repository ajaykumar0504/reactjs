import React, { useState } from "react";

const Support = () => {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry Sent! Our agents will contact you shortly.");
    setMsg("");
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>24/7 Roadside Support</h2>
      <p>Need help? Send us a message below.</p>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto", display: "flex", flexDirection: "column", gap: "10px" }}>
        <input type="text" placeholder="Your Name" required style={inputStyle} />
        <textarea placeholder="How can we help?" value={msg} onChange={(e) => setMsg(e.target.value)} required style={inputStyle} />
        <button type="submit" style={{ background: "#000", color: "#fff", padding: "10px", cursor: "pointer" }}>Send Message</button>
      </form>
    </div>
  );
};

const inputStyle = { padding: "10px", border: "1px solid #ccc", borderRadius: "5px" };

export default Support;