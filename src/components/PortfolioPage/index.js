import React, { useEffect } from "react";
import NavBar from "../NavBar2"
import { PortfolioContainer, PortfolioGrid } from "./portfolioPageElements";

const ProjectPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <NavBar />
            <h1>Hello World!!</h1>
            <p>Test to see if portfolio page works</p>
            <PortfolioContainer id='portfolioPage'>
                <PortfolioGrid>
                    <p>box</p>
                    <p>box</p>
                    <p>box</p>
                </PortfolioGrid>
            </PortfolioContainer>
        </>
    );
};

export default ProjectPage;