import React from "react";
import "../Styling/Chat.css";
import { Avatar, IconButton as Btn } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";

const Chat = () => {
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
        <p className='chat_message'>
          <span className="chat_name">Eric</span>
          This is a message
          <span className='chat_timestamp'>
          {new Date().toUTCString()}
          
          </span>
        </p>
      </div>
    </div>
  );
};

export default Chat;
