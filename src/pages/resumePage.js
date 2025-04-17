import React, {useState} from "react";
import Sidebar from "../components/Sidebar2";
import Resume from "../components/Resume";
import Footer from "../components/Footer2";
import NavBar from "../components/NavBar2";

const ResumePage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Resume />
      <Footer />
    </div>
  );
}

export default ResumePage;