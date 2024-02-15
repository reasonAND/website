/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import Showcase from './components/Showcase';
import About from './components/About';
import PreLoader from './components/PreLoader';

function App() {
  
  const [isDarkTheme, setIsDarkTheme] = useState(false);  

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
     console.log(isDarkTheme)
  };

  useEffect(() => {
    document.title = 'reason&'; // Set dynamic title here
    const timeoutId = setTimeout(() => {
      window.onunload = function() {
        window.scrollTo(0, 0);
      };
    }, 250);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <PreLoader />
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Hero />
      <Showcase />
      <About />
      <Footer />
    </>
  )
}

export default App
