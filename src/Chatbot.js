// src/Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css'; // Optional for styling

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input) return;

    // Add user message to the chat
    const newMessages = [...messages, { user: input }];
    setMessages(newMessages);

    // Simulate bot response (replace with actual API call later)
    const botResponse = `You said: ${input}`;
    setTimeout(() => {
      setMessages([...newMessages, { bot: botResponse }]);
    }, 1000);

    setInput(''); // Clear input field
  };

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.user ? 'chatbot-user' : 'chatbot-bot'}>
            {msg.user || msg.bot}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
