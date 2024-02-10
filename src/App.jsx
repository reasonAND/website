/* eslint-disable no-unused-vars */
import LocomotiveScroll from 'locomotive-scroll';

import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Footer from './components/Footer';


function App() {

  const locomotiveScroll = new LocomotiveScroll();  

  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  )
}

export default App
