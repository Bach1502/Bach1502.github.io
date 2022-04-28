import React from "react"

export default function SocialIcon() {
    return (
        <div className="social--icon--section">
 
        <div className="share">
        <img  className="circle" src={process.env.PUBLIC_URL + '/images/circle.svg'} alt="circle"/>
        <img className="shareIcon" src={process.env.PUBLIC_URL + '/images/share.svg'} alt="share"/>
        </div>
        <div className="email">
        <img  className="circle2" src={process.env.PUBLIC_URL + '/images/circle.svg'} alt="circle"/>
        <img  className="emailIcon" src={process.env.PUBLIC_URL + '/images/email.svg'} alt="email"/>
      
        </div>

        <div className="support">
        <img  className="circle3" src={process.env.PUBLIC_URL + '/images/circle.svg'} alt="circle"/>
        <img  className="supportIcon" src={process.env.PUBLIC_URL + '/images/support.svg'} alt="support"/>
    
        </div>



        </div>
    )
}