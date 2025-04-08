import React, {useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import TileSection from "../components/tileSection";
import { homeObjOne } from "../components/tileSection/data"
import DemoReel from "../components/DemoReel";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (location.state?.scrollTo) {
          const section = document.getElementById(location.state.scrollTo);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
    
            // Optionally clear state to prevent repeat scrolling
            window.history.replaceState({}, document.title);
          }
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