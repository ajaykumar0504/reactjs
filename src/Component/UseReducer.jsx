import React, { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  country: '',
  zipCode: '',
  dob: '',
  gender: ''
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

export default function UseReducer() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_FIELD',
      field: name,
      value: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Final Form State:", state);
    alert("Data logged to console successfully!");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}> Registration Form</h2>
        <form onSubmit={handleFormSubmit}>
          
          <div style={styles.inputGroup}>
            <input style={styles.input} name="name" placeholder="Name" value={state.name} onChange={handleInputChange} required />
            <input style={styles.input} type="email" name="email" placeholder="Email" value={state.email} onChange={handleInputChange} required />
          </div>

          <div style={styles.inputGroup}>
            <input style={styles.input} name="phone" placeholder="Phone Number" value={state.phone} onChange={handleInputChange} />
            <input style={styles.input} type="date" name="dob" value={state.dob} onChange={handleInputChange} />
          </div>

          <input style={styles.fullWidthInput} name="address" placeholder="Address" value={state.address} onChange={handleInputChange} />

          <div style={styles.inputGroup}>
            <input style={styles.input} name="city" placeholder="City" value={state.city} onChange={handleInputChange} />
            <input style={styles.input} name="state" placeholder="State" value={state.state} onChange={handleInputChange} />
          </div>

          <div style={styles.inputGroup}>
            <input style={styles.input} name="zipCode" placeholder="Zip Code" value={state.zipCode} onChange={handleInputChange} />
            <select style={styles.input} name="country" value={state.country} onChange={handleInputChange}>
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="Canada">Canada</option>
            </select>
          </div>

          <div style={styles.inputGroup}>
            <select style={styles.fullWidthInput} name="gender" value={state.gender} onChange={handleInputChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div style={styles.btnRow}>
            <button type="submit" style={styles.submitBtn}>Submit Data</button>
            <button type="button" onClick={() => dispatch({ type: 'RESET_FORM' })} style={styles.resetBtn}>Reset</button>
          </div>

        </form>
      </div>
    </div>
  );
}


const styles = {
  wrapper: { display: 'flex', justifyContent: 'center', padding: '20px', backgroundColor: '#f4f7f6', minHeight: '100vh' },
  card: { background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', width: '100%', maxWidth: '550px' },
  title: { textAlign: 'center', marginBottom: '20px', color: '#333' },
  inputGroup: { display: 'flex', gap: '15px', marginBottom: '15px' },
  input: { flex: 1, padding: '12px', borderRadius: '5px', border: '1px solid #ccc' },
  fullWidthInput: { width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '15px', boxSizing: 'border-box' },
  btnRow: { display: 'flex', gap: '10px', marginTop: '10px' },
  submitBtn: { flex: 2, padding: '12px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' },
  resetBtn: { flex: 1, padding: '12px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }
};