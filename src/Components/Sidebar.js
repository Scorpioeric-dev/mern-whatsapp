import React from "react";
import "../Styling/Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "../Components/SidebarChat";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
      <Avatar src='https://mykombini-ab5a.kxcdn.com/102132-thickbox/mafex-no107-mafex-spider-man-miles-morales-spider-man-into-the-spider-verse-ver-medicom-toy.jpg'/>
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
      <div className="sidebar_searchContainer">
      <SearchOutlined/>
      <input placeholder='Search or start new chat' type='text'/>
      </div>
      </div>
      <div className="sidebar_chats">
      {/*SideBar-Chat-Row-Component*/}
      <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/>
      </div>
    </div>
  );
};

export default Sidebar;
