import React from 'react'
export default function Hotspot() {
    return (
        <div className="hotspot--section">
              <img className="hotspot--image" src={process.env.PUBLIC_URL + '/images/placeholder.svg'} alt="placeholder"/>
                <div className="hotspot--description">
                <h1 className="title">GAMELOFT GAME</h1>
                <span className="genre">Racing/Action | </span><img src={process.env.PUBLIC_URL+'/images/stars.svg'} alt="stars"/>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit...
</p>
                </div>
                <div className="hotspot--store">
                <img className="hotspot--image" src={process.env.PUBLIC_URL + '/images/store.svg'} alt="store"/>
                </div>

        </div>
    )
}