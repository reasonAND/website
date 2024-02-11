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
    // document.title = 'Welcome!'; // Set dynamic title here
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
