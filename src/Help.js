import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import { analyze } from './utils';
import chatbot from './images/chatbot.jpg';

export default function Help() {
  const [messages, setMessages] = useState([
    {
      message: "Hi, how can I help you?",
    },
  ]);

  const [text, setText] = useState("");

  const onSend = () => {
    const newList = [...messages, { message: text, user: true }];
    setMessages(newList);
  
    const reply = analyze(text); // Pass the language parameter
    const updatedList = [...newList, { message: reply }];
    setMessages(updatedList);
  
    setText("");
    scrollToBottom();
  };
  
  const scrollToBottom = () => {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={chatbot} alt="chatbot" height={200} width={200}/>
        <h2 style={{ color: 'blue' }}> Help</h2>
      </div>
      <div
  id="chat-container"
  className="chat"
  style={{
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    marginTop: '20px',
    maxHeight: '400px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'grey', // Background color
    boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)', // Box shadow
  }}
>

        {messages.length > 0 &&
          messages.map((data, index) => (
            <ChatMessage key={index} {...data} />
          ))}
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
                flex: '1',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                marginRight: '10px',
                fontSize: '17px', // Font size
                outline: 'none', // Remove outline on focus
                boxShadow: '4px 4px 3px rgba(1,1,1,1)', // Remove box shadow on focus
              }}
          />
          <button type="button" onClick={onSend} style={{ padding: '10px 20px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
