import React from "react";
import { PdfIframe, Container } from "./resumeElements";

const Resume = () => {
  return (
    <>
      <Container>
        <PdfIframe 
          title="resume document" 
          src="/Kaiden_Jones_Resume_07.pdf">
        </PdfIframe>
      </Container>
    </>
  );
};

export default Resume;
