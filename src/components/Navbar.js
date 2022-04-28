import React from "react"

export default function Navbar() {
    return (
        <nav className="nav--section">
        <div className="nav--logo">
            <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="logo"/>
        </div>
        <div className="burger">
        <img src={process.env.PUBLIC_URL + '/images/burger.svg'} alt="logo"/>

        </div>
        </nav>
    )
}