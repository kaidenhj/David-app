import React from "react";
import { PdfIframe, Container } from "./resumeElements";

const Resume = () => {
  return (
    <>
      <Container>
        <PdfIframe 
          title="resume document" 
          src="/David-Shaffer-Resume.pdf">
        </PdfIframe>
      </Container>
    </>
  );
};

export default Resume;
