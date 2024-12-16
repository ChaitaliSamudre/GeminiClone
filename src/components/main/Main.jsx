import React from "react";
import { assets } from "../../assets/assets/assets";
import "./main.css";

export const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon}></img>
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev</span>
          </p>
          <p>How can I help you today?</p>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <p>Suggest beautiful places to visit in upcoming season</p>
          <img src={assets.compass_icon}></img>
        </div>
        <div className="card">
          <p>Briefly summarizes this concept: urban plan</p>
          <img src={assets.bulb_icon}></img>
        </div>
        <div className="card">
          <p>How do I improve the readability of the code</p>
          <img src={assets.message_icon}></img>
        </div>
        <div className="card">
          <p>Suggest beautiful places to visit in upcoming season</p>
          <img src={assets.code_icon}></img>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display incorrect info, including about poeple, so double click it.
          </p>
        </div>
      </div>
    </div>
  );
};
