import React, { useState, useEffect } from "react";

export default function Stopwatch() {
  const [sec, setSec] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [running]);

  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    const h = hrs < 10 ? "0" + hrs : hrs;
    const m = mins < 10 ? "0" + mins : mins;
    const s = secs < 10 ? "0" + secs : secs;

    return `${h}:${m}:${s}`;
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Stopwatch</h2>
        <div style={styles.display}>{formatTime(sec)}</div>

        <div style={styles.buttonGroup}>
          <button onClick={() => setRunning(true)} style={styles.startBtn}>
            Start
          </button>
          <button onClick={() => setRunning(false)} style={styles.stopBtn}>
            Stop
          </button>
          <button 
            onClick={() => { setRunning(false); setSec(0); }} 
            style={styles.resetBtn}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f9",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "320px",
  },
  title: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "20px",
  },
  display: {
    fontSize: "3rem",
    fontFamily: "monospace",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#222",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  startBtn: {
    padding: "10px 15px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    flex: 1,
  },
  stopBtn: {
    padding: "10px 15px",
    backgroundColor: "#ffc107",
    color: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    flex: 1,
  },
  resetBtn: {
    padding: "10px 15px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    flex: 1,
  },
};