import React from 'react';

const StudentCard = ({ student }) => {
  const cardStyle = {
    border: '2px solid #333',
    padding: '15px',
    margin: '10px',
    borderRadius: '8px',
    width: '200px',
    backgroundColor: '#f9f9f9'
  };

  return (
    <div style={cardStyle}>
      <h3>{student.name}</h3>
      <p>Course: {student.course}</p>
      <p>
        Status: 
        <strong> {student.isActive ? "Active" : "Inactive"}</strong>
      </p>
    </div>
  );
};

export default StudentCard;
