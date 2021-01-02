import React, { useState } from "react";
import "../Styling/Chat.css";
import { Avatar, IconButton as Btn } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from '../axios'

import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";

const Chat = ({ messages }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
   
    await axios.post('/messages/new', {
      message: input,
      name: 'Demo',
      timestamp: '10:30',
      received: false,
    });

    setInput('');
  };

  
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat_headerRight">
          <Btn>
            <SearchOutlined />
          </Btn>
          <Btn>
            <AttachFile />
          </Btn>
          <Btn>
            <MoreVert />
          </Btn>
        </div>
      </div>

      <div className="chat_body">
        {messages.map((message, index) => (
          <p className={`chat_message ${message.received && "chat_receiver"}`}
          key={index}>
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className="chat_timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            type="text"
            placeholder="Type a chat"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={sendMessage}>Send Chat</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
