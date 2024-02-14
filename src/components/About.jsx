/* eslint-disable no-unused-vars */
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

const About = () => {

  const locomotiveScroll = new LocomotiveScroll(); 
  gsap.registerPlugin(ScrollTrigger) 
  const tl = gsap.timeline();

  useEffect(() => {

    tl.to(".main", {
      backgroundColor: "#242424",
      scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom top",
        markers: true,
        pin: true
  
      }

    })    
  
    return () => {

    }
  }, [tl])
  
  

  return (
    <div className="w-[100vw] h-[100vh] bg-[#292551]">
      <div className="main w-[100vw] h-[100vh] p-3 text-[#ffce00] bg-[#006450] text-[20px] text-center rounded-3xl">
        About
      </div>
    </div>
  )
}

export default About