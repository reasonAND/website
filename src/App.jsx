/* eslint-disable no-unused-vars */
import LocomotiveScroll from 'locomotive-scroll';

import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


function App() {

  const locomotiveScroll = new LocomotiveScroll();  

  return (
    <>
      <Navbar />
      <Hero />
      <Hero />
    </>
  )
}

export default App
