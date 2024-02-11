/* eslint-disable no-unused-vars */
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';

import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import Showcase from './components/Showcase';
import About from './components/About';
import PreLoader from './components/PreLoader';


function App() {

  const locomotiveScroll = new LocomotiveScroll();  
  useEffect(() => {
    document.title = 'Nasir Gandu'; // Set dynamic title here
    const timeoutId = setTimeout(() => {
      window.onunload = function() {
        window.scrollTo(0, 0);
      };
    }, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
    <div>
      <PreLoader />
      <Navbar />
      <Hero />
      <Showcase />
      <About />
      <Footer />
    </div>
    </>
  )
}

export default App
