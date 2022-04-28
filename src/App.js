import React from 'react'
import Navbar from './components/Navbar'
import SocialIcon from './components/SocialIcon'
import Hotspot from './components/Hotspot'
import Newsletter from './components/Newsletter'
import gameData from './data/gamedata'
import Community from './components/Community'
import Promotional from './components/Promotional'
import Footer from './components/Footer'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
export default function App() {


  return (
    <div className="App">
    <Navbar/>
    
    <SocialIcon />
 
  

  <AnimationOnScroll animateIn="animate__slideInUp">
     <Hotspot /> 
    </AnimationOnScroll>
    <AnimationOnScroll animateIn="animate__slideInUp">
    <Newsletter />
    </AnimationOnScroll>
    <AnimationOnScroll animateIn="animate__slideInUp">
    <Community gameData={gameData}/>
    </AnimationOnScroll>
    <AnimationOnScroll animateIn="animate__slideInUp">
    <Promotional/>
    </AnimationOnScroll>

    <Footer/>

    </div>
  );
}

