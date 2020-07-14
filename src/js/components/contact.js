import React from "react"
import github  from "../../img/githubicon.png"
import mail from "../../img/mail.png"
import css from "../../css/contactCss.css"
export class Contact extends React.Component{
    render (){
        return (
            <div id="contact">
                <h1>Contact</h1>
                <h1><img src={mail} className="mailicon" /></h1>
                <div className="mailaddress-area">
                    <p>
                        naganagaeichan@gmail.com
                    </p>
                </div>
                <h1>GitHub</h1>
                <h1>
                <a className="github-link" href="https://github.com/N-Eiki"><img src={github} /></a>    
                
                </h1>
            </div>
            )
    }
}