import React, { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.address) newErrors.address = "Address is required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.state) newErrors.state = "State is required";
    if (!form.country) newErrors.country = "Country is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) newErrors.email = "Invalid email format";

    if (!/^\d{10}$/.test(form.phoneNumber)) newErrors.phoneNumber = "Enter 10 digit number";

    if (form.password.length < 6) newErrors.password = "Min 6 characters required";
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!/^\d+$/.test(form.zipCode)) newErrors.zipCode = "Numbers only";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration Successful!");
      console.log("Submitted Data:", form);
    }
  };

  const renderInput = (label, name, type = "text") => (
    <div style={styles.fieldGroup}>
      <label style={styles.label}>{label}</label>
      <input
        name={name}
        type={type}
        value={form[name]}
        onChange={handleChange}
        placeholder={`Enter ${label.toLowerCase()}`}
        style={{ 
          ...styles.input, 
          borderColor: errors[name] ? "#ff4d4d" : "#ccc" 
        }}
      />
      {errors[name] && <span style={styles.errorText}>{errors[name]}</span>}
    </div>
  );

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Registration Form</h2>
        
        <div style={styles.grid}>
          {renderInput("Name", "name")}
          {renderInput("Email", "email", "email")}
          {renderInput("Phone Number", "phoneNumber")}
          {renderInput("Password", "password", "password")}
          {renderInput("Confirm Password", "confirmPassword", "password")}
          {renderInput("Address", "address")}
          {renderInput("City", "city")}
          {renderInput("State", "state")}
          {renderInput("Country", "country")}
          {renderInput("Zip Code", "zipCode")}
        </div>

        <button type="submit" style={styles.button}>Submit Registration</button>
      </form>
    </div>
  );
}

const styles = {
  container: { 
    display: "flex", 
    justifyContent: "center", 
    padding: "40px", 
    backgroundColor: "#f0f2f5", 
    minHeight: "100vh" },

  form: { 
    width: "100%", 
    maxWidth: "800px", 
    padding: "30px", 
    backgroundColor: "#fff", 
    borderRadius: "8px", 
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)" },

  title: { 
    textAlign: "center", 
    marginBottom: "30px", 
    color: "#333" },

  grid: { 
    display: "grid", 
    gridTemplateColumns: "1fr 1fr", 
    gap: "20px" },

  fieldGroup: { 
    display: "flex", 
    flexDirection: "column" },

  label: { 
    marginBottom: "8px", 
    fontWeight: "bold", 
    fontSize: "14px", 
    color: "#555" },

  input: { 
    padding: "12px", 
    borderRadius: "4px", 
    border: "1px solid #ccc", 
    outline: "none" },

  errorText: { 
    color: "#ff4d4d", 
    fontSize: "12px", 
    marginTop: "5px" },

  checkboxGroup: { 
    marginTop: "25px" },

  button: { 
    width: "100%", 
    padding: "15px", 
    marginTop: "25px", 
    background: "#007bff", 
    color: "#fff", 
    border: "none", 
    borderRadius: "4px", 
    cursor: "pointer", 
    fontSize: "16px", 
    fontWeight: "600" }
};