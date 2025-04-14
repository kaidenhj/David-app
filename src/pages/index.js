import React, {useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import TileSection from "../components/tileSection";
import { homeObjOne } from "../components/tileSection/data"
import DemoReel from "../components/DemoReel";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio/index";
import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
      console.log("home scroll")
      if (location.state?.scrollTo) {
        const sectionId = location.state.scrollTo;
    
        const scroll = () => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
    
            // Clear scrollTo state so it doesn't persist
            window.history.replaceState({}, document.title);
          } else {
            console.warn('Section not found yet, retrying...');
            // Try again after a short delay
            setTimeout(scroll, 100);
          }
        };
    
        scroll();
      }
    }, [location]);

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <HeroSection id='home' />
            <DemoReel id='demo' />
            <TileSection id='about' {...homeObjOne}/>
            <Portfolio id='portfolio' />
            <Contact id='contact'/>
            <Footer/>
        </>
    )
};
 
export default Home;