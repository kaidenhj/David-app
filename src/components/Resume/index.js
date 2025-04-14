import React from "react";
import { PdfIframe, Container } from "./resumeElements";
import NavBar from "../NavBar2";
import Footer from "../Footer2";

const Resume = () => {
  return (
    <>
      <NavBar />
      <Container>
        <PdfIframe 
          title="resume document" 
          src="/Kaiden_Jones_Resume_07.pdf">
        </PdfIframe>
      </Container>
      <Footer />
      
    </>
  );
};

export default Resume;
