import React, { useState, useRef } from 'react';
import Carousel from 'react-elastic-carousel'
export default function Promotional() {
  const array=[1,2,3,4,5,6];

  const promotionals =array.map((number)=>{
    return(
      <div className="promotionalSlot">

      <img className="promotionalImage" src={process.env.PUBLIC_URL + '/images/placeholder.svg'} />
      <h1>POST NUMBER {number}</h1>
      <div className="line"></div>
      <p className="shortDescription">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ... </p>
      <img className="shareOption"  src={process.env.PUBLIC_URL + '/images/share_button.svg'} />
      <button className="readMore" >Read More</button>
    </div>
    )
  });
   





  let resetTimeout;
  const carouselRef = React.useRef(null);
 
  return (

    <div className="promotional">
      <div className="titleAndDescription">
        <h1>Special Events &amp; Promotional</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.</p>
      </div>
      <div className="carouselContainer">
      <Carousel
      style={{position:'absolute'}}
        ref={carouselRef}
        enableAutoPlay
        autoPlaySpeed={3000} // same time
        onNextEnd={({ index }) => {
          
          clearTimeout(resetTimeout)
          if (index === Math.ceil(promotionals.length-3)) {
            resetTimeout = setTimeout(() => {
              carouselRef.current.goTo(0)
            }, 3000) // same time
          }
        }}
  
        itemsToShow={3}
        showArrows={false}
      >
        {promotionals}

      </Carousel>
    </div>
    </div>
  );
}

