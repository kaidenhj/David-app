import React, {useState} from "react";
import Sidebar from "../components/Sidebar2";
import Portfolio from "../components/PortfolioPage";
import Footer from "../components/Footer2";
import NavBar from "../components/NavBar2";

const PortfolioPage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default PortfolioPage;