import React from 'react';
import Slider from './CommunitySocialSlider'
import social from '../data/socialdata'
export default function Community(prop) {
    let game = prop.gameData.map(function (data) {
        return (
            <a href={data.link} className="game--slot">
                <img className="game--icon" src={process.env.PUBLIC_URL + '/images/car/' + data.image} alt="game" />
                <span className="game--title">{data.title}</span>
            </a>

        )
    });




    return (
        <div className="community--section">
            <div className="game--section">
                <h1>GAME COMMUNITY HUB</h1>
                <h3>Live Game Updates</h3>

                <div className="game--slider">
                    <img className="arrow--left" src={process.env.PUBLIC_URL + '/images/left_arrow.svg'} alt="arrow" />
                    <img className="arrow--right" src={process.env.PUBLIC_URL + '/images/right_arrow.svg'} alt="arrow" />
                    {game}
                </div>
            </div>

            <div className="social--section">
                <nav className="social--navbar">
                    <h3>All posts</h3>
                    <div className="search--and--social">
                        <img className="twitter" src={process.env.PUBLIC_URL + '/images/twitter.svg'} alt="twitter" />
                        <img className="facebook" src={process.env.PUBLIC_URL + '/images/facebook.svg'} alt="facebook" />
                        <img className="instagram" src={process.env.PUBLIC_URL + '/images/instagram.svg'} alt="instagram" />

                     <div className="search-corner">
                        <img className="search" src={process.env.PUBLIC_URL + '/images/search.svg'} alt="search"  />
                            <input className='searchbox' type="search" placeholder="Search" results="0" />
                    </div>
                    </div>



                </nav>
                <Slider socialData={social} />
                <br/>
                <br/>
                <br/>
                <br/>
            </div>


        </div>
    )
}