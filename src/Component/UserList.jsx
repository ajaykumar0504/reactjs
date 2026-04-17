import React, { useEffect, useState } from "react";
import UserDetails from "./UserDetails";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.list}>
        <h2 style={styles.heading}>Users</h2>
        <div style={styles.scrollContainer}>
          {users.map((user) => (
            <div
              key={user.id}
              style={{
                ...styles.userItem,
                ...(selectedUser?.id === user.id ? styles.activeUser : {}),
              }}
              onClick={() => setSelectedUser(user)}
            >
              <span style={styles.avatar}>{user.name[0]}</span>
              {user.name}
            </div>
          ))}
        </div>
      </div>

      <div style={styles.details}>
        {selectedUser ? (
          <UserDetails user={selectedUser} />
        ) : (
          <div style={styles.emptyState}>
            <p>Select a user from the directory to view full profile details.</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "24px",
    padding: "40px",
    backgroundColor: "#f0f2f5",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
  list: {
    width: "35%",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 80px)",
  },
  heading: {
    margin: "0 0 20px 0",
    fontSize: "1.5rem",
    color: "#1a1a1b",
    borderBottom: "2px solid #3b82f6",
    paddingBottom: "10px",
    display: "inline-block",
    width: "fit-content",
  },
  scrollContainer: {
    overflowY: "auto",
    flex: 1,
    paddingRight: "5px",
  },
  userItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
    padding: "12px 16px",
    marginBottom: "8px",
    borderRadius: "10px",
    transition: "all 0.2s ease",
    color: "#4b5563",
    border: "1px solid transparent",
    backgroundColor: "#f8fafc",
  },
  activeUser: {
    backgroundColor: "#eff6ff",
    color: "#1d4ed8",
    borderColor: "#bfdbfe",
    fontWeight: "600",
  },
  avatar: {
    width: "32px",
    height: "32px",
    backgroundColor: "#3b82f6",
    color: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.85rem",
    fontWeight: "bold",
  },
  details: {
    width: "65%",
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    height: "fit-content",
    minHeight: "400px",
  },
  emptyState: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: "#9ca3af",
    fontSize: "1.1rem",
    textAlign: "center",
    border: "2px dashed #e5e7eb",
    borderRadius: "12px",
    padding: "20px",
  },
};