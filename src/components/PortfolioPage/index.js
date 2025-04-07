import React, { useEffect } from "react";
import { ProjectContainer, ProjectH1, ProjectWrapper, ProjectIcon,
    ProjectSection, ProjectH2, ProjectText, ProjectLink, SocialIconLink,
    ProjectColumns, Column1, Column2, ProjectList, Item, Icon, ReturnButton, Button} from "./portfolioPageElements";
import NavBar from "../NavBar"
import { PortfolioWrapper } from "../Portfolio/portfolioElements";

const ProjectPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            {/* <NavBar toggle={toggle} />
            <PortfolioContainer lightbg={lightbg} id='portfolioPage'>
                <PortfolioWrapper>

                </PortfolioWrapper>
            </PortfolioContainer> */}
        </>
    );
};

export default ProjectPage;