/* eslint-disable no-unused-vars */
import LocomotiveScroll from 'locomotive-scroll';

import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import Showcase from './components/Showcase';
import About from './components/About';


function App() {

  const locomotiveScroll = new LocomotiveScroll();  

  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <About />
      <Footer />
    </>
  )
}

export default App
