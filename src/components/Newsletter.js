import React from 'react'
import {CountrySelect} from './country'
export default function Newsletter() {
    return (
        <div className="newsletter--section">
            <img className="minion" alt="minion"  src={process.env.PUBLIC_URL + '/images/minion.svg'}/>
            <div className="register--form">
             <h1>Stay in the Know!</h1>
             <p>Don't get left behind!<br/>
                Subscribe to our newsletters today!</p>
            <input type="text" className="input" placeholder="Name" />
            <input type="text" className="input" placeholder="Email" />
            {CountrySelect}
            <select className="platform">
            <option value="" disabled selected>Platform</option>
            <option value="IOs">IOs</option>
            <option value="Android">Android</option>
            <option value="PC">PC</option>
            </select>
            <div className="term--agree">
            <input type="checkbox" value="term--agree" id="checkbox"/>
            <label>By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions and I have read the Privacy Policy.</label>
            </div>
            <div className="promotional--agree">
            <input type="checkbox" value="promotional--agree" id="checkbox"/>
            <label>I agree to receive promotional offers relating to all Gameloft games and services.</label>
            </div>
            <div className="button--container">
            <button className="register--button">
             Button
            </button>
            </div>
        </div>

        </div>
    )
}