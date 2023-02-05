import React from 'react'
import './background.scss'
import Typewriter from "typewriter-effect"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import img1 from 'images/img1.jpeg'
import img2 from 'images/img2.jpeg'
import img3 from 'images/img3.jpeg'
import img4 from 'images/img4.jpeg'
import img5 from 'images/img5.jpeg'
import img6 from 'images/img6.jpeg'







export const BackGround = () => {
    return (
        <div className="Background">
            <Typewriter 
             options={{
              
              autoStart: true,
              loop: true,
           
              
            }}
  
  onInit={(typewriter)=> {

  typewriter
 
   
  .typeString("MAPS ")
  
    
  .pauseFor(500)
  .typeString("Lorem Ipsum is simply dummy text ")
  .deleteChars(33)
  .pauseFor(20)
  .typeString("Lorem Ipsum has been the industrys")
  .start();
  
  }}
  
  />
  <Carousel className="curousel" 
   showArrows={true} 
    autoPlay={true}
     interval={3000}
      infiniteLoop={true}
      showStatus={true}
      showIndicators={false}
      showThumbs={false}
      transitionTime={1000}
      >
      <div>  <img src={img1}  alt=''/></div>
      <div>  <img src={img2}  alt=''/></div>
      <div>  <img src={img3}  alt=''/></div>
      <div>  <img src={img4}  alt=''/></div>
      <div>  <img src={img5}  alt=''/></div>
      <div>  <img src={img6}  alt=''/></div>


      </Carousel> 
           
        </div>
    )
}
