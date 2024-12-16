import React, { useState } from "react";
import { assets } from "../../assets/assets/assets";
import './sidebar.css'

export const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
      <img  onClick={()=>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon}></img>
      <div className="new-chat">
        <img src={assets.plus_icon}></img>
        {extended? <p>New Chat</p> : null} 
      </div>
      </div>
      {extended ?
      <div className="recent">
        <p className="recent-title">Recent</p>
        <div className="recent-entry">
          <img src={assets.message_icon} alt=""/>
          {extended ? <p>What is react ...</p> : null}
        </div>
      </div>
: null}
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon}></img>
          {extended ? <p>Help</p>: null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon}></img>
          {extended ?<p>Activity</p>: null}
        </div>
        <div className="bottom-item recent-entry">
        <img src={assets.setting_icon}></img>
        {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};
