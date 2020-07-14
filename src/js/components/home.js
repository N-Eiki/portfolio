import React from "react"
import background from "../../img/slope.png"
import homeicon from "../../img/home.png";
import profileicon from "./../../img/profile.png"
import workicon from "./../../img/work.png"
import mailicon from "./../../img/mail.png"
import css from "./../../css/homeCss.css"

export class Home extends React.Component{
    render (){
        return (
        <div id="home">
            <img src={background} className="header-image" alt="logo" />
            <h1 className="my-name">Nagata Eiki</h1>

            <div className="navi">
                <a href="#home"><img src={homeicon} className="navi-icon" alt="logo" />home</a>
                <a href="#profile"><img src={profileicon} className="navi-icon" alt="profile" />profile</a>
                <a href="#works"><img src={workicon} className="navi-icon" alt="work" />works</a>
                <a href="#contact"><img src={mailicon} className="navi-icon" alt="profile" />contact</a>
            </div>
      
            
            
        </div>
            )
    }
}