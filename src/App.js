import "./App.css";
import React from "react";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";

const App = () => {
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
