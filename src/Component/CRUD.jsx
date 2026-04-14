import React, { useState, useEffect } from "react";

export default function CRUD() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const [isEditing, setIsEditing] = useState(null); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSave = () => {
    if (!name || !email) return alert("Please fill in both fields");

    if (isEditing) {
      fetch(`https://jsonplaceholder.typicode.com/users/${isEditing}`, {
        method: "PUT",
        body: JSON.stringify({ name, email }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then(() => {
          setUsers(users.map(u => u.id === isEditing ? { ...u, name, email } : u));
          resetForm();
        });
    } else {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({ name, email }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          const newUser = { ...data, id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1 };
          setUsers([...users, newUser]);
          resetForm();
        });
    }
  };

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { method: "DELETE" })
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      });
  };

  const startEdit = (user) => {
    setIsEditing(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  const resetForm = () => {
    setIsEditing(null);
    setName("");
    setEmail("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>CRUD Operations(Table Implementation)</h1>
      <div style={{ marginBottom: "20px", border: "1px solid #ddd", padding: "10px" }}>
        <h3>{isEditing ? "Edit User" : "Add New User"}</h3>
        <input 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button onClick={handleSave}>{isEditing ? "Update" : "Add"}</button>
        {isEditing && <button onClick={resetForm}>Cancel</button>}
      </div>

      <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button onClick={() => startEdit(u)}>Edit</button>
                <button onClick={() => handleDelete(u.id)} style={{ color: "red" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}