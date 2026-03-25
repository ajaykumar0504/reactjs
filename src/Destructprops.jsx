import React from 'react';

export default function Destructprops({ name, email, role }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <div className="role-tag">{role}</div>
    </div>
  );
}