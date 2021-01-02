import "./App.css";
import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import Pusher from "pusher-js";
import axios from "./axios";

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((res) => {
      setMessages(res.data);
    });
  }, []);


  useEffect(() => {
    const pusher = new Pusher("62eff83d674f3cc8aa7b", {
      cluster: "us3",
    });

    var channel = pusher.subscribe("messages");

    channel.bind("inserted", (data) => {
      alert(JSON.stringify(data));
    });
  }, []);

  console.log(messages);
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default App;
