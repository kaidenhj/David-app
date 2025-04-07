import React from "react";
import { PdfIframe, Icon, Container } from "./resumeElements";
import NavBar from "../NavBar";

const Resume = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Icon to='/'>Kaiden Jones</Icon>
        <PdfIframe 
          title="resume document" 
          src="/Kaiden_Jones_Resume_07.pdf">
        </PdfIframe>
      </Container>
    </>
  );
};

export default Resume;
