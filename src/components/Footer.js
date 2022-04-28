import React from "react"

export default function Footer() {
    return (
        <div className="footer">
            <div className="upper">
        <div className="leftSide">
        <img  className="logo" src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="logo"/>
        <div className="social">
        <h1>Follow us</h1>
        <a href="https://www.facebook.com/GameloftViet/?brand_redir=216238295505">
        <img  className="logoSocial" src={process.env.PUBLIC_URL + '/images/fb.svg'} alt="logo"/>
        </a>
        <a href="https://twitter.com/gameloft">
        <img  className="logoSocial" src={process.env.PUBLIC_URL + '/images/twt.svg'} alt="logo"/>
        </a>
        <a href="https://www.linkedin.com/company/gameloft/">
        <img  className="logoSocial" src={process.env.PUBLIC_URL + '/images/linkedin.svg'} alt="logo"/>
        </a>
        <a href="https://www.youtube.com/user/gameloft">
        <img  className="logoSocial" src={process.env.PUBLIC_URL + '/images/youtube.svg'} alt="logo"/>
        </a>
        <div className="language">
        <select className="dropdown">
            <option value="English">English</option>
            <option value="Tiếng Việt">Tiếng Việt</option>
            </select>
        </div>
        </div>
        </div>

        <div className="rightSide">
        <div className="paragraph">
            <h3>VISIT</h3>
            <br/>
        
            <a href="https://www.gameloft.com/"><p>Gameloft Games</p></a>
            
            <a href="https://www.gameloft.com/corporate/en/jobs/apply/"><p>Gameloft Careers</p></a>
            <a href="https://www.gameloft.com/central"><p>Gameloft News</p></a>
            <a href="https://discord.com/invite/gameloft"><p>Gameloft Forum</p></a>
            <a href="https://www.gameloft.com/corporate/en/"><p>Gameloft Corporate</p></a>
            <a href="https://www.gameloft.com/"><p>Gameloft Advertising</p></a>
            <a href="https://gameloft.helpshift.com/hc/en/"><p>Gameloft Support</p></a>
         
        </div>
        <br/>
        <div className="paragraph">
            <h3>LEGAL</h3>
            <br/>
            <a href="https://www.gameloft.com/en/conditions-of-use"><p>Terms of Use</p></a>
            <a href="https://www.gameloft.com/en/privacy-notice"><p>Privacy Policy</p></a>
            <a href="https://www.gameloft.com/en/legal/showcase-cookie-policy"><p>Cookie Policy</p></a>
            <a><p>EULA</p></a>
            <a href="https://www.gameloft.com/en/information/legal-notices"><p>Legal Notices</p></a>
            <a href="https://www.gameloft.com/en/information/event"><p>Event Rules</p></a>
            <a><p>Business Contacts</p></a>
        </div>


        </div>
        </div>
        <div className="lower">

        <p>©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo are trademarks of Gameloft in the U.S. and/or other countries.</p>
        <p>All other trademarks are the property of their respective owners.</p>
            </div>
        </div>
    )
}