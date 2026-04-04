import React, { useState } from 'react';

function MiniChatApp() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h2>Mini Chat App</h2>
      <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Type a message..."
          style={{ padding: '8px', width: '70%' }}
        />
        <button onClick={handleSendMessage} style={{ padding: '8px', marginLeft: '5px' }}>
          Send Message
        </button>
      </div>


      <div style={{ textAlign: 'left' }}>
        <h3>Messages:</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {messages.map((msg, index) => (
            <li key={index} style={{ background: '#f4f4f4', margin: '5px 0', padding: '10px', borderRadius: '5px' }}>
              {msg}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MiniChatApp;